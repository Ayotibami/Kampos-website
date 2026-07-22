/* Single submission path for all three feedback forms — Contact, Bug report
   and Feature request. Every form funnels through `submitFeedback`, so the day
   Kampos has its own backend this one file is what changes, not the pages.

   Submissions go to Web3Forms (https://web3forms.com): a no-backend service
   that emails each submission to the Kampos inbox tied to the access key. The
   key is public by design and lives in REACT_APP_WEB3FORMS_KEY. */

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

/* Context worth capturing on every submission that the user never types. The
   keys are the human-readable labels Web3Forms shows as dashboard columns and
   email lines. */
const metadata = () => ({
  Page: typeof window !== "undefined" ? window.location.href : "",
  Submitted:
    typeof window !== "undefined" ? new Date().toLocaleString() : "",
  Browser: typeof navigator !== "undefined" ? navigator.userAgent : "",
});

/* @param {string} subject   Email subject, e.g. "[Bug] Feed — can't load".
   @param {string} fromName  Sender name shown on the email (optional).
   @param {string} replyTo   Reply-to address so a reply reaches the sender.
   @param {object} fields    label→value pairs; the KEYS become the column
                             headers in the Web3Forms dashboard, so they are
                             written as friendly labels ("What went wrong?").
   @returns the parsed Web3Forms response on success; throws on failure so the
            caller can surface a message and re-enable the form.

   Note: no file attachments — that is a paid Web3Forms tier. If Kampos moves
   to its own backend later, add a FormData file append here and nothing at the
   call sites has to change. */
export async function submitFeedback({ subject, fromName, replyTo, fields = {} }) {
  if (!ACCESS_KEY) {
    // A misconfigured deploy should fail loudly in the console, not silently
    // swallow a student's report.
    throw new Error(
      "Feedback is not configured (missing REACT_APP_WEB3FORMS_KEY).",
    );
  }

  const form = new FormData();
  form.append("access_key", ACCESS_KEY);
  if (subject) form.append("subject", subject);

  // `from_name`/`replyto` are Web3Forms control fields (not data columns): they
  // set the email's sender label and reply-to so a reply reaches the student.
  if (fromName) form.append("from_name", String(fromName));
  if (replyTo) form.append("replyto", String(replyTo));

  // Send every mapped field on every submission — including blanks — so the
  // Web3Forms dashboard has a stable, complete set of columns. Skipping empty
  // values makes columns come and go between submissions, which shows up as
  // missing or ragged columns in the table. undefined/null still drop out
  // (those are "field not applicable to this form", not "left blank").
  for (const [key, value] of Object.entries({ ...fields, ...metadata() })) {
    if (value === undefined || value === null) continue;
    form.append(key, typeof value === "string" ? value : String(value));
  }

  let res;
  try {
    res = await fetch(ENDPOINT, { method: "POST", body: form });
  } catch {
    // Network failure — offline, DNS, CORS, etc.
    throw new Error(
      "Couldn't reach the server. Check your connection and try again.",
    );
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(
      data.message || "Something went wrong sending that. Please try again.",
    );
  }
  return data;
}
