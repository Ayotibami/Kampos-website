import FeedbackShell from "../../SubComponents/FeedbackForm/FeedbackShell";
import {
  FieldGroup,
  IdentityFields,
  SelectField,
  TextArea,
  TextField,
  ChoiceGroup,
  CheckboxField,
} from "../../SubComponents/FeedbackForm/FeedbackFields";

const CATEGORIES = [
  "Feed & posts",
  "Creators & showcase",
  "Messaging & DMs",
  "Notifications",
  "Profile / Avitag",
  "Schools & communities",
  "Something completely new",
];

const STEPS = [
  {
    title: "We read every one",
    body: "Requests go straight to the team. A real person reads yours — no auto-reply.",
  },
  {
    title: "We look for the pattern",
    body: "When lots of students ask for the same thing, it moves up the list fast.",
  },
  {
    title: "You hear from us",
    body: "If we build it, you're the first to know. If we can't yet, we'll tell you why.",
  },
];

const validate = (values) => ({
  email: !values.email.trim()
    ? "We need your email to follow up on your idea."
    : !/^\S+@\S+\.\S+$/.test(values.email.trim())
      ? "That email doesn't look right — mind checking it?"
      : undefined,
  headline: !values.headline.trim()
    ? "Give your idea a short title."
    : undefined,
  details:
    values.details.trim().length < 10
      ? "Tell us a bit more about what you have in mind."
      : undefined,
});

const FeatureRequestPage = () => {
  const handleSubmit = async (payload) => {
    // TODO: wire to the real endpoint. Until then the request is logged so the
    // flow can be tested end to end, and the UI treats it as a success.
    console.log("Feature request submitted:", payload);
    await new Promise((resolve) => setTimeout(resolve, 700));
  };

  return (
    <FeedbackShell
      eyebrow="Feature request"
      title="Got an idea? We're listening."
      intro="We're cooking Kampos for you, so your opinion actually moves things. Even Kappy fit chop sack letter if you say so 😅. Tell us what you want and why — the why is the part that gets it built."
      image="Images/feature-request-3d.png"
      imageAlt="Feature request"
      formTitle="Request a feature"
      formIntro="Three required fields. The rest helps us understand the problem behind the idea."
      submitLabel="Send my idea"
      steps={STEPS}
      successTitle="Idea received — we're on it!"
      successBody="Thank you for helping shape Kampos. The team reads every request, and we'll reach out if we need more detail or when your idea goes live."
      initialValues={{
        fullName: "",
        email: "",
        avitag: "",
        school: "",
        headline: "",
        category: "",
        details: "",
        today: "",
        wantLevel: "",
        canContact: true,
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ values, setField, errors }) => (
        <>
          <FieldGroup
            step="01"
            title="About you"
            hint="So we can tell you when your idea ships."
          >
            <IdentityFields
              values={values}
              setField={setField}
              errors={errors}
            />
          </FieldGroup>

          <FieldGroup step="02" title="Your idea">
            <TextField
              id="headline"
              label="Give it a name"
              error={errors.headline}
              hint="One line — imagine it's the title of the update post."
              value={values.headline}
              onChange={(v) => setField("headline", v)}
              placeholder="e.g. Dark mode for late-night scrolling"
            />

            <SelectField
              id="category"
              label="What part of Kampos is this about?"
              optional
              value={values.category}
              onChange={(v) => setField("category", v)}
              options={CATEGORIES}
              placeholder="Pick a category"
            />

            <TextArea
              id="details"
              label="Tell us more"
              error={errors.details}
              hint="How would it work? Where would you find it? Paint the picture."
              value={values.details}
              onChange={(v) => setField("details", v)}
              placeholder="I'd love a way to save posts so I can come back to them later…"
              rows={5}
            />
          </FieldGroup>

          <FieldGroup
            step="03"
            title="The problem behind it"
            hint="This is the part that helps us the most — we'd rather solve your problem than guess at a feature."
          >
            <TextArea
              id="today"
              label="What do you do today instead?"
              optional
              hint="The workaround you've been living with, however silly."
              value={values.today}
              onChange={(v) => setField("today", v)}
              placeholder="I screenshot the post and send it to myself on WhatsApp so I don't lose it…"
              rows={4}
            />

            <ChoiceGroup
              name="wantLevel"
              label="How much do you want this?"
              optional
              value={values.wantLevel}
              onChange={(v) => setField("wantLevel", v)}
              options={[
                "Nice to have",
                "I'd use it all the time",
                "I'd tell the whole campus",
              ]}
            />

            <CheckboxField
              id="canContact"
              label="You can reach out to me about this idea — I'm happy to explain more or test it early."
              checked={values.canContact}
              onChange={(v) => setField("canContact", v)}
            />
          </FieldGroup>
        </>
      )}
    </FeedbackShell>
  );
};

export default FeatureRequestPage;
