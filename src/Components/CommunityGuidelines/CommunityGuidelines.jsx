import { Link } from "react-router-dom";
import LegalPage, {
  LegalSection,
  Callout,
} from "../../SubComponents/LegalPage/LegalPage";

const SUPPORT = "kamposkonnect@gmail.com";

const sections = [
  { id: "vibe", label: "The vibe" },
  { id: "respect", label: "Respect each other" },
  { id: "real", label: "Keep it real" },
  { id: "clean", label: "Keep it clean" },
  { id: "no-spam", label: "No spam or scams" },
  { id: "legal", label: "Nothing illegal" },
  { id: "privacy", label: "Protect each other" },
  { id: "value", label: "Post with value" },
  { id: "consequences", label: "If you break the rules" },
  { id: "reporting", label: "Reporting & moderation" },
  { id: "contact", label: "Questions?" },
];

const CommunityGuidelines = () => {
  return (
    <LegalPage
      eyebrow="Kampos Legal"
      title="Community Guidelines"
      updated="22 July 2026"
      intro="Kampos runs on good vibes. These guidelines keep it safe, respectful, and fun for every student — read them, live them, and help us protect the space."
      sections={sections}
    >
      <LegalSection id="vibe" title="The vibe">
        <p>
          Kampos is your campus in one place — gist, stories, updates, rants, and
          hot takes, all from fellow students. That only works if everybody plays
          fair. These Community Guidelines explain what’s cool, what’s not, and
          what happens when someone crosses the line.
        </p>
        <p>
          They work hand-in-hand with our{" "}
          <Link to="/terms">Terms and Conditions</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>. By using Kampos, you agree to
          follow all three. Break these rules and we may remove content, limit
          your reach, or in serious cases, suspend or delete your account.
        </p>
        <Callout>
          The golden rule: if you wouldn’t say or post it to a real person’s face
          on campus, don’t post it on Kampos.
        </Callout>
      </LegalSection>

      <LegalSection id="respect" title="Respect each other">
        <p>
          Everyone on Kampos is a student like you — treat them that way. Debate,
          disagree, drag each other over which school get the best jollof, sure.
          But keep it human.
        </p>
        <p>Not allowed:</p>
        <ul>
          <li>Harassment, bullying, or targeting someone repeatedly.</li>
          <li>
            Hate speech or slurs against anyone based on tribe, religion, gender,
            disability, or where they’re from.
          </li>
          <li>Threats of violence or wishing harm on someone.</li>
          <li>Encouraging others to pile on, harass, or attack a person.</li>
        </ul>
      </LegalSection>

      <LegalSection id="real" title="Keep it real">
        <p>
          Be yourself (or your Avitag self). Pretending to be someone you’re not
          messes with the trust that makes Kampos work.
        </p>
        <ul>
          <li>
            No impersonation — don’t pose as another student, a lecturer, an
            official body, or Kampos itself.
          </li>
          <li>No fake or misleading profiles.</li>
          <li>
            Don’t create accounts to dodge a suspension or ban, or to farm
            engagement.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="clean" title="Keep it clean">
        <p>
          Kampos is a public campus space, not the wild wild west. Some things
          just don’t belong here.
        </p>
        <ul>
          <li>No explicit sexual content, nudity, or pornography.</li>
          <li>No graphic violence or gore.</li>
          <li>
            No content that sexualizes anyone — and absolutely nothing involving
            minors.
          </li>
          <li>
            Your username, bio, and profile picture must stay clean too — no
            offensive, misleading, or unlawful content.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="no-spam" title="No spam or scams">
        <p>
          Nobody comes to Kampos for scams and spam. Keep the feed real and
          worth scrolling.
        </p>
        <ul>
          <li>No spam, repetitive posts, or engagement bait.</li>
          <li>No bots or automated accounts.</li>
          <li>
            No scams, fraud, “double your money” schemes, phishing, or misleading
            promotions.
          </li>
          <li>Don’t post other people’s content and pass it off as yours.</li>
        </ul>
      </LegalSection>

      <LegalSection id="legal" title="Nothing illegal">
        <p>
          If it’s against the law offline, it’s against the rules on Kampos.
        </p>
        <ul>
          <li>No selling or promoting illegal drugs, weapons, or services.</li>
          <li>No fraud, hacking, or other criminal activity.</li>
          <li>
            No pirated content or anything you don’t have the rights to (movies,
            copyrighted notes, etc.).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="privacy" title="Protect each other">
        <p>
          Gist is fun, but not at the cost of someone’s safety or privacy.
        </p>
        <ul>
          <li>
            Don’t share someone’s private information without their consent —
            phone number, address, results, matric number, private chats
            (a.k.a. no doxxing).
          </li>
          <li>Don’t post private images or videos of others without permission.</li>
          <li>
            Remember: what you post may be visible to other students, so think
            before you share.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="value" title="Post with value">
        <p>
          The best of Kampos is students putting other students on — real gist,
          useful updates, creativity, and community. Aim for that.
        </p>
        <ul>
          <li>Share content that adds something: gist, info, art, or a good laugh.</li>
          <li>Follow the campus vibes — keep it relevant to student life.</li>
          <li>
            Use Kampos as a space for connection, gist, and learning — and let
            student creators shine.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="consequences" title="If you break the rules">
        <p>
          We’d rather everybody just vibe, but when rules get broken, we act.
          Depending on how serious it is, we may:
        </p>
        <ul>
          <li>Remove the content.</li>
          <li>Restrict its visibility (e.g. hide it from feeds).</li>
          <li>Give you a warning.</li>
          <li>
            Suspend or permanently terminate your account for repeated or serious
            violations.
          </li>
        </ul>
        <p>
          We look at context, and we act on behavior that clearly breaks these
          rules or the spirit behind them. Decisions are based on these Guidelines
          together with our <Link to="/terms">Terms and Conditions</Link>.
        </p>
      </LegalSection>

      <LegalSection id="reporting" title="Reporting & moderation">
        <p>
          You’re part of how we keep Kampos safe. If you see something that breaks
          these rules:
        </p>
        <ul>
          <li>Report it directly in the app, or</li>
          <li>
            Email us at <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>.
          </li>
        </ul>
        <p>
          Our team reviews every report and acts as fast as we can. Report in good
          faith and you’ve got nothing to worry about —{" "}
          <strong>we don’t tolerate retaliation against people who report</strong>.
        </p>
        <Callout>
          Flagging a post sends it straight to our team for review. If it breaks
          the rules, we take it down as fast as possible. That’s how we all keep
          Kampos a space worth being in.
        </Callout>
      </LegalSection>

      <LegalSection id="contact" title="Questions?">
        <p>
          Got a question about these Guidelines, or think we got a call wrong?
          Talk to us — we’re listening. Reach out anytime at{" "}
          <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>.
        </p>
        <p>
          These Guidelines may be updated as Kampos grows. When we make meaningful
          changes, we’ll let you know. Keep vibing, and look out for each other. 💙
        </p>
      </LegalSection>
    </LegalPage>
  );
};

export default CommunityGuidelines;
