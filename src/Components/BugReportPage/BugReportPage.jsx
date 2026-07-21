import { useState } from "react";

import FeedbackShell from "../../SubComponents/FeedbackForm/FeedbackShell";
import {
  FieldGroup,
  IdentityFields,
  SelectField,
  TextArea,
  TextField,
  ChoiceGroup,
} from "../../SubComponents/FeedbackForm/FeedbackFields";

/* Best-effort browser + OS read from the user agent. It only has to be good
   enough to save the reporter from typing it — the field stays editable, and
   an unrecognised agent just leaves it blank rather than guessing wrong. */
const detectDevice = () => {
  if (typeof navigator === "undefined") return "";
  const ua = navigator.userAgent;

  const browser =
    /Edg\//.test(ua) ? "Edge"
    : /OPR\/|Opera/.test(ua) ? "Opera"
    : /Chrome\//.test(ua) ? "Chrome"
    : /Firefox\//.test(ua) ? "Firefox"
    : /Safari\//.test(ua) ? "Safari"
    : "";

  const os =
    /Android/.test(ua) ? "Android"
    : /iPhone|iPad|iPod/.test(ua) ? "iOS"
    : /Windows/.test(ua) ? "Windows"
    : /Mac OS X/.test(ua) ? "macOS"
    : /Linux/.test(ua) ? "Linux"
    : "";

  if (!browser && !os) return "";
  return [browser, os].filter(Boolean).join(" on ");
};

const AREAS = [
  "Feed",
  "Posts & comments",
  "Profile / Avitag",
  "Sign up & login",
  "Notifications",
  "Search",
  "Creators & showcase",
  "Something else",
];

const STEPS = [
  {
    title: "It lands with the team",
    body: "Your report goes straight to the people building Kampos — no ticket queue, no bots.",
  },
  {
    title: "We try to break it too",
    body: "We reproduce it using your steps and device info, then work out what went wrong.",
  },
  {
    title: "We fix and tell you",
    body: "Once it's patched we email you so you know the thing you reported is properly dead.",
  },
];

const validate = (values) => ({
  email: !values.email.trim()
    ? "We need your email so we can tell you when it's fixed."
    : !/^\S+@\S+\.\S+$/.test(values.email.trim())
      ? "That email doesn't look right — mind checking it?"
      : undefined,
  area: !values.area ? "Pick where on Kampos this happened." : undefined,
  whatHappened:
    values.whatHappened.trim().length < 10
      ? "Tell us a little more about what went wrong."
      : undefined,
});

const BugReportPage = () => {
  // Read the user agent once, on mount, so the field has a sensible prefill
  // the reporter can correct rather than an empty box they'll likely skip.
  const [device] = useState(detectDevice);

  const handleSubmit = async (payload) => {
    // TODO: wire to the real endpoint. Until then the report is logged so the
    // flow can be tested end to end, and the UI treats it as a success.
    console.log("Bug report submitted:", payload);
    await new Promise((resolve) => setTimeout(resolve, 700));
  };

  return (
    <FeedbackShell
      eyebrow="Bug report"
      title="Something broke? Tell us."
      intro="Omo, no vex 😅 — making apps no easy at all. The more you tell us here, the faster we can find it and kill it. Nothing is too small to report."
      image="Images/bug-report-3d.png"
      imageAlt="Bug report"
      formTitle="Report a bug"
      formIntro="Only three things are required. Everything else just helps us find it faster."
      submitLabel="Send bug report"
      steps={STEPS}
      successTitle="Report received — thank you!"
      successBody="We've got it, and the team is already looking. If we need more detail we'll email you, and you'll hear from us again once it's fixed."
      initialValues={{
        fullName: "",
        email: "",
        avitag: "",
        school: "",
        area: "",
        whatHappened: "",
        steps: "",
        frequency: "",
        severity: "",
        device,
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ values, setField, errors }) => (
        <>
          <FieldGroup
            step="01"
            title="About you"
            hint="So we can reach you when there's a fix."
          >
            <IdentityFields
              values={values}
              setField={setField}
              errors={errors}
            />
          </FieldGroup>

          <FieldGroup
            step="02"
            title="The bug"
            hint="The part that actually helps us fix it."
          >
            <SelectField
              id="area"
              label="Where did it happen?"
              error={errors.area}
              value={values.area}
              onChange={(v) => setField("area", v)}
              options={AREAS}
              placeholder="Pick the part of Kampos"
            />

            <TextArea
              id="whatHappened"
              label="What went wrong?"
              error={errors.whatHappened}
              hint="What did you expect to happen, and what happened instead?"
              value={values.whatHappened}
              onChange={(v) => setField("whatHappened", v)}
              placeholder="I tried to post a picture and the app just froze on the loading screen…"
              rows={5}
            />

            <TextArea
              id="steps"
              label="How do we make it happen?"
              optional
              hint="Walk us through it like you're telling a friend. This is the single most useful thing you can give us."
              value={values.steps}
              onChange={(v) => setField("steps", v)}
              placeholder={"1. I opened…\n2. I tapped…\n3. Then…"}
              rows={5}
            />
          </FieldGroup>

          <FieldGroup step="03" title="How bad is it?">
            <ChoiceGroup
              name="frequency"
              label="How often does it happen?"
              optional
              value={values.frequency}
              onChange={(v) => setField("frequency", v)}
              options={["Every single time", "Sometimes", "Just once"]}
            />

            <ChoiceGroup
              name="severity"
              label="How much is it affecting you?"
              optional
              value={values.severity}
              onChange={(v) => setField("severity", v)}
              options={[
                "Just looks off",
                "Annoying but I can manage",
                "I can't use Kampos",
              ]}
            />

            <TextField
              id="device"
              label="Device & browser"
              optional
              hint="We filled this in from your browser — edit it if the bug happened somewhere else."
              value={values.device}
              onChange={(v) => setField("device", v)}
              placeholder="e.g. Chrome on Android"
            />
          </FieldGroup>
        </>
      )}
    </FeedbackShell>
  );
};

export default BugReportPage;
