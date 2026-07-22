import { Link } from "react-router-dom";
import LegalPage, {
  LegalSection,
  Callout,
} from "../../SubComponents/LegalPage/LegalPage";

const SUPPORT = "kamposkonnect@gmail.com";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "definitions", label: "Definitions" },
  { id: "eligibility", label: "Who can use the service" },
  { id: "account", label: "Your account" },
  { id: "profile", label: "Profile & information" },
  { id: "content", label: "Your content" },
  { id: "data-use", label: "Data use" },
  { id: "guidelines", label: "Community guidelines" },
  { id: "reporting", label: "Reporting & moderation" },
  { id: "rights", label: "Rights of Kampos" },
  { id: "ip", label: "Intellectual property" },
  { id: "privacy", label: "Data & privacy" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "changes", label: "Changes to the Terms" },
  { id: "law", label: "Governing law" },
  { id: "contact", label: "Contact" },
];

const TermsConditions = () => {
  return (
    <LegalPage
      eyebrow="Kampos Legal"
      title="Terms and Conditions"
      updated="22 July 2026"
      intro="These Terms govern your access to and use of Kampos. By creating an account, accessing, or using Kampos, you agree to be bound by them."
      sections={sections}
    >
      <LegalSection id="intro" title="Introduction">
        <p>
          Kampos is an <strong>Ayoti</strong> product that connects students in
          tertiary institutions across Nigeria. These Terms and Conditions
          (“Terms”) <strong>govern your access to and use</strong> of Kampos. By
          creating an account, accessing, or using Kampos,{" "}
          <strong>you agree to be bound by these Terms</strong>.
        </p>
        <p>
          Kampos is built for students — to share gist, stories, updates, and
          experiences — but like every platform, it runs on rules. These Terms
          explain your <strong>rights</strong>, <strong>responsibilities</strong>
          , and the <strong>actions</strong> we may take if the rules are
          breached.
        </p>
        <p>
          By continuing to use Kampos after any updates to these Terms, you also
          agree to the revised version.{" "}
          <strong>If you don’t agree, you should stop using Kampos.</strong>
        </p>
      </LegalSection>

      <LegalSection id="definitions" title="Definitions">
        <p>For clarity in these Terms:</p>
        <ul>
          <li>
            <strong>“Kampos”</strong> refers to the Kampos mobile application,
            website, and related services operated by Ayoti.
          </li>
          <li>
            <strong>“Ayoti”</strong> refers to the parent company and owner of
            Kampos.
          </li>
          <li>
            <strong>“User”</strong> means any individual who creates an account
            or uses Kampos.
          </li>
          <li>
            <strong>“Content”</strong> means any text, images, media, or material
            shared on Kampos by users.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="eligibility" title="Who can use the service (eligibility)">
        <p>To be eligible to use Kampos, you must meet the following requirements:</p>
        <ul>
          <li>
            You must be at least <strong>16 years old</strong>.
          </li>
          <li>
            You must be a current student of a{" "}
            <strong>recognized tertiary institution</strong> in Nigeria.
            Tertiary institutions can include, but are not limited to,
            universities, polytechnics, and colleges of education.
          </li>
          <li>
            You have the <strong>legal capacity</strong> to enter into this
            agreement.
          </li>
          <li>
            The information you provide (like your name, school, and email) is{" "}
            <strong>accurate and up to date</strong> — no fake profiles, no
            impersonation.
          </li>
          <li>
            You are not <strong>currently suspended or banned</strong> from
            Kampos or any related Ayoti product.
          </li>
        </ul>
        <p>
          These requirements are <strong>not exhaustive</strong>. Kampos reserves
          the right to define additional eligibility criteria or restrictions as
          needed. By creating an account or using Kampos, you confirm that you
          meet these eligibility requirements. If you do not, you are not
          permitted to access or use Kampos.
        </p>
      </LegalSection>

      <LegalSection id="account" title="Your account">
        <h3>Creating an account</h3>
        <ul>
          <li>You agree to provide accurate and truthful information (name, email, etc.).</li>
          <li>You cannot create an account for someone else without their permission.</li>
        </ul>
        <h3>Inactive accounts</h3>
        <p>
          If your account stays inactive for a long time, we may suspend or
          delete it to keep Kampos fresh and active.
        </p>
        <h3>Account security</h3>
        <p>
          You are responsible for keeping your account safe — that means choosing
          a strong password (not “password123” 🙃) and not sharing it with anyone.
        </p>
        <h3>Your responsibility</h3>
        <p>
          All activity on your account is your responsibility — whether it’s you
          or your roommate borrowing your phone. Always log out of shared devices
          and keep your login details private.
        </p>
        <h3>If your account is compromised</h3>
        <p>
          If you suspect unauthorized access, notify us immediately at{" "}
          <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>. We may temporarily suspend
          your account while we investigate. Kampos is not responsible for losses
          or damages if you failed to secure your account.
        </p>
        <h3>Account termination</h3>
        <ul>
          <li>You may delete your account at any time.</li>
          <li>We reserve the right to suspend or terminate accounts that violate our Terms.</li>
        </ul>
      </LegalSection>

      <LegalSection id="profile" title="Profile & information">
        <h3>Accurate details</h3>
        <p>
          You agree to provide accurate and truthful details on your profile
          (name, school, level, major) and keep them up to date. Impersonating
          another student is not allowed — if we find out your profile is pointing
          to someone else, we’ll take action.
        </p>
        <h3>Visibility of profile</h3>
        <p>
          Some profile details (like your name, school, and bio) are visible to
          other Kampos users by default. Privacy controls are coming soon 🚀 so
          you’ll be able to decide who sees what.
        </p>
        <h3>Appropriate content</h3>
        <p>
          Your username, bio, and profile picture must not contain offensive,
          misleading, or unlawful content. Keep it clean.
        </p>
        <h3>Our right to act</h3>
        <p>
          Kampos reserves the right to remove or restrict profiles that break
          these rules or misrepresent identity. If you misuse your profile, we may
          suspend or terminate your account.
        </p>
      </LegalSection>

      <LegalSection id="content" title="Your content (user-generated content)">
        <h3>Ownership</h3>
        <p>
          Everything you post on Kampos — gist, comments, memes, pictures, videos
          — is still yours. <strong>You own your content.</strong>
        </p>
        <h3>License to Kampos</h3>
        <p>
          By posting on Kampos, you grant us a license to use, host, store,
          reproduce, distribute, and display your content within the app. This
          license is only for the purpose of operating, improving, promoting, and
          protecting Kampos. <strong>We won’t sell</strong> your content to
          advertisers or misuse it.
        </p>
        <h3>Responsibility</h3>
        <p>You’re responsible for the content you share. That means:</p>
        <ul>
          <li>Don’t post harmful, abusive, illegal, or plagiarized content.</li>
          <li>
            Don’t upload things you don’t have the rights to (like pirated movies
            or someone else’s copyrighted notes).
          </li>
          <li>Remember, what you post may be visible to other students.</li>
        </ul>
        <h3>Moderation</h3>
        <p>
          We may take down or limit any content that violates these Terms or our
          platform guidelines. Our goal is to keep the vibes safe and positive for
          everyone. If another user reports your content and we confirm it breaks
          the rules, we’ll act quickly to handle it.
        </p>
        <h3>No selling</h3>
        <p>
          <strong>We do not sell your personal content or data to third parties. Ever.</strong>
        </p>
      </LegalSection>

      <LegalSection id="data-use" title="Data use (non-personal & aggregated data)">
        <p>
          While we don’t sell your content or personal data, we may use{" "}
          <strong>anonymized and aggregated information</strong> (e.g. “30% of
          students in UniLAG gist about exams during April”) to:
        </p>
        <ul>
          <li>Improve Kampos features and performance</li>
          <li>Understand trends in student engagement</li>
          <li>
            Share general insights with trusted partners (but never in a way that
            identifies you personally)
          </li>
        </ul>
        <p>
          This will <strong>never personally identify you</strong>.
        </p>
      </LegalSection>

      <LegalSection id="guidelines" title="Community guidelines">
        <p>
          Your use of Kampos must also follow our{" "}
          <Link to="/community-guidelines">Community Guidelines</Link>, which
          outline acceptable behavior and content on the platform. These
          guidelines are designed to keep Kampos safe, respectful, and fun for all
          students. By using Kampos, you agree to:
        </p>
        <ul>
          <li>Respect other students and their opinions.</li>
          <li>Avoid harassment, hate speech, or harmful behavior.</li>
          <li>Share content that adds value and follows campus vibes (no spam or scams).</li>
          <li>Use Kampos responsibly as a space for connection, gist, and learning.</li>
        </ul>
        <p>
          Kampos reserves the right to act on any behavior that clearly violates
          the spirit of these rules. Reports and moderation decisions are based on
          these Terms and the{" "}
          <Link to="/community-guidelines">Community Guidelines</Link>.
        </p>
      </LegalSection>

      <LegalSection id="reporting" title="Reporting & moderation">
        <h3>Reporting content</h3>
        <p>
          If you come across content that is offensive, harmful, misleading,
          spammy, or violates Kampos rules, you can report it directly through the
          app or by contacting us at{" "}
          <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>.
        </p>
        <h3>Our response</h3>
        <p>When a report is submitted, our team will review it. Depending on the severity, we may:</p>
        <ul>
          <li>Remove the reported content</li>
          <li>Restrict visibility (e.g. hide it from feeds)</li>
          <li>Suspend or terminate the user’s account if they repeatedly violate our Terms</li>
        </ul>
        <h3>Grounds for removal</h3>
        <p>Content may be removed if it includes (but is not limited to):</p>
        <ul>
          <li>Hate speech, bullying, or harassment</li>
          <li>False impersonation (pretending to be another student)</li>
          <li>Explicit sexual or violent content</li>
          <li>Illegal activities (scams, fraud, etc.)</li>
          <li>Spam, misleading promotions, or bots</li>
        </ul>
        <h3>No retaliation</h3>
        <p>Users who report in good faith will not face retaliation.</p>
      </LegalSection>

      <LegalSection id="rights" title="Rights of Kampos">
        <ul>
          <li>
            <strong>Content &amp; account actions</strong> — we reserve the right
            to remove, restrict, or suspend any content or accounts that violate
            these Terms, our policies, or that we believe may harm the platform.
          </li>
          <li>
            <strong>Changes to features</strong> — Kampos may add, change, or
            discontinue certain features, services, or functionalities at any
            time. We’ll try to notify you, but sometimes we have to move fast.
          </li>
          <li>
            <strong>Policy enforcement</strong> — Kampos has the discretion to
            enforce these Terms and platform guidelines in the way we believe best
            protects our platform and users.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="ip" title="Intellectual property">
        <ul>
          <li>
            <strong>Ownership</strong> — Kampos, including its name, brand,
            trademarks, designs, code, and technology, is the property of Ayoti.
            All rights are reserved.
          </li>
          <li>
            <strong>No unauthorized use</strong> — Users are not allowed to copy,
            modify, distribute, sell, lease, reverse-engineer, or exploit any part
            of Kampos without prior written permission from Ayoti.
          </li>
          <li>
            <strong>License to use</strong> — We grant you a limited, personal,
            non-transferable, and revocable license to use Kampos solely for its
            intended purpose — to connect, share, and engage as a student.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="privacy" title="Data & privacy">
        <p>
          Your use of Kampos is also governed by our{" "}
          <Link to="/privacy">Privacy Policy</Link>. This document explains in
          detail what data we collect, how we use it, and how we protect it.
        </p>
        <p>
          By using Kampos, you agree that we may collect and process certain
          information about you (like account details, profile info, and usage
          data) as described in our Privacy Policy. We only use this data to
          provide, improve, and secure the Kampos experience —{" "}
          <strong>never to sell your personal information</strong>.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="Disclaimers">
        <ul>
          <li>
            <strong>“As is” service</strong> — Kampos is provided on an “as is”
            and “as available” basis. We make no guarantees that the service will
            always be available, uninterrupted, secure, or error-free.
          </li>
          <li>
            <strong>No warranties</strong> — While we work hard to keep Kampos
            reliable and fun, we do not guarantee the accuracy, completeness, or
            reliability of any content or features on the platform.
          </li>
          <li>
            <strong>Your responsibility</strong> — You use Kampos at your own
            risk. We are not liable for issues such as downtime, technical errors,
            lost data, or inaccurate information shared by other users. Any
            disputes between users must be resolved directly between them.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="liability" title="Limitation of liability">
        <ul>
          <li>
            <strong>Limited responsibility</strong> — To the fullest extent
            permitted by law, Kampos (and Ayoti) will not be liable for any
            indirect, incidental, special, consequential, or punitive damages —
            including lost profits, lost data, or business interruptions — arising
            from your use (or inability to use) the platform.
          </li>
          <li>
            <strong>User assumes risk</strong> — By using Kampos, you agree that
            you do so at your own risk. We provide the service as-is.
          </li>
          <li>
            <strong>Maximum liability</strong> — If we are found legally
            responsible for any claim related to Kampos, our total liability will
            not exceed the amount you paid to use Kampos (which, for most users, is
            ₦0).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="indemnification" title="Indemnification">
        <p>
          By using Kampos, you agree to indemnify, defend, and hold harmless Ayoti
          (the parent of Kampos), its team, and affiliates from any claims,
          liabilities, damages, losses, or expenses (including legal fees) that
          arise from:
        </p>
        <ul>
          <li>Your misuse of the platform,</li>
          <li>Your violation of these Terms or applicable laws, or</li>
          <li>Any content you post or share on Kampos that leads to legal action.</li>
        </ul>
      </LegalSection>

      <LegalSection id="changes" title="Changes to the Terms">
        <ul>
          <li>
            <strong>Right to update</strong> — Kampos may update or modify these
            Terms at any time to reflect changes in our services, legal
            requirements, or platform guidelines.
          </li>
          <li>
            <strong>Notification</strong> — When we make changes, we’ll notify you
            through the app, website, or email.
          </li>
          <li>
            <strong>Acceptance of changes</strong> — By continuing to use Kampos
            after the updated Terms are published, you agree to the revised Terms.
            If you don’t agree, you should stop using the platform.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="law" title="Governing law & dispute resolution">
        <ul>
          <li>
            <strong>Governing law</strong> — These Terms shall be governed by and
            interpreted in accordance with the laws of the Federal Republic of
            Nigeria.
          </li>
          <li>
            <strong>Dispute resolution</strong> — If any dispute arises from your
            use of Kampos, both you and Ayoti agree to first attempt to resolve it
            amicably through direct communication.
          </li>
          <li>
            <strong>Arbitration</strong> — If resolution is not possible, disputes
            shall be referred to arbitration in Nigeria, in accordance with the
            Arbitration and Conciliation Act. The decision of the arbitrator shall
            be final and binding.
          </li>
          <li>
            <strong>Jurisdiction</strong> — By using Kampos, you agree that
            Nigerian courts will have jurisdiction over any disputes that cannot be
            resolved by arbitration.
          </li>
        </ul>
        <Callout>
          If any part of these Terms is found invalid or unenforceable, the
          remaining provisions will continue to apply.
        </Callout>
      </LegalSection>

      <LegalSection id="contact" title="Contact information">
        <p>
          If you have any questions, concerns, or legal inquiries regarding these
          Terms, you can reach us at{" "}
          <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>. We aim to respond within 3
          working days.
        </p>
      </LegalSection>
    </LegalPage>
  );
};

export default TermsConditions;
