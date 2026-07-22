import { Link } from "react-router-dom";
import LegalPage from "../../SubComponents/LegalPage/LegalPage";

/* Placeholder until the full guidelines are finalised. No TOC, just a friendly
   "coming soon" so the footer link resolves to a real, on-brand page. */
const CommunityGuidelines = () => {
  return (
    <LegalPage
      eyebrow="Kampos Legal"
      title="Community Guidelines"
      intro="The rules that keep Kampos safe, respectful, and fun for every student."
    >
      <div className="legal-soon">
        <div className="legal-soon-emoji">🚀</div>
        <h2>Coming soon</h2>
        <p>
          We’re putting the finishing touches on our full Community Guidelines —
          the playbook for how we all keep Kampos a space worth being in.
        </p>
        <p>
          In the meantime, the basics still apply: respect other students, no
          harassment or hate speech, no spam or scams, and use Kampos as a space
          for connection, gist, and learning. Kampos reserves the right to act on
          any behavior that clearly violates the spirit of these rules.
        </p>
        <p>
          Until then, our <Link to="/terms">Terms and Conditions</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link> cover how the platform works
          and how we handle your data. Check back here soon — we’ll publish the
          full guidelines as soon as they’re ready.
        </p>
      </div>
    </LegalPage>
  );
};

export default CommunityGuidelines;
