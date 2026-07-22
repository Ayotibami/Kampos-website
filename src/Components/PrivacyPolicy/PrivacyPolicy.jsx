import LegalPage, {
  LegalSection,
  Callout,
} from "../../SubComponents/LegalPage/LegalPage";

const SUPPORT = "kamposkonnect@gmail.com";

const sections = [
  { id: "about", label: "What this is about" },
  { id: "what-we-need", label: "What we collect" },
  { id: "what-we-use", label: "How we use it" },
  { id: "who-else", label: "Who else needs it" },
  { id: "your-control", label: "What you can control" },
  { id: "retention", label: "How long we keep it" },
  { id: "protection", label: "How we protect it" },
  { id: "age", label: "Are you a kid?" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Talk to us" },
  { id: "recap", label: "Quick recap" },
  { id: "disclaimer", label: "Disclaimer & liability" },
];

const PrivacyPolicy = () => {
  return (
    <LegalPage
      eyebrow="Kampos Legal"
      title="Privacy Policy"
      updated="22 July 2026"
      intro="Your trust is a big deal to us. This policy explains what data we collect, why we collect it, and how we use, store, and protect it — in plain English."
      sections={sections}
    >
      <LegalSection id="about" title="What is this about?">
        <p>We guess you know who we are and what we’re building.</p>
        <p>
          Kampos isn’t just another app — okay, maybe it is — but we like to
          think of it as a rocket… 🚀 We’re building a product that helps
          students in tertiary institutions across Nigeria connect, share, and
          network — not just within their schools, but across campuses
          nationwide. Kampos is more than a social app. It’s an ecosystem
          designed to make school life richer, more connected, and a lot more
          fun.
        </p>
        <p>
          To make all this possible, we need to collect some data from you. But
          don’t worry — your trust is a big deal to us. We’ve got strong
          policies in place to protect your information, and we’ll always be
          transparent about how we use it.
        </p>
        <p>This Privacy Policy explains:</p>
        <ul>
          <li>What data we collect</li>
          <li>Why we collect it</li>
          <li>How we use, store, and protect it</li>
        </ul>
        <p>
          So go on, give it a read. We promise it’s not as boring as your course
          handout. 😉
        </p>
      </LegalSection>

      <LegalSection id="what-we-need" title="What do we need?">
        <p>Let’s break down the data we are interested in:</p>
        <ul>
          <li>Account information</li>
          <li>Profile details</li>
          <li>User-generated content (UGC)</li>
          <li>Device info</li>
          <li>Usage data</li>
        </ul>

        <h3>🧾 Account Information</h3>
        <p>
          We collect basic info when you sign up — your{" "}
          <strong>email, username and app password</strong>. Why? So we can:
        </p>
        <ul>
          <li>Create and manage your account</li>
          <li>Authenticate you (a.k.a. confirm it’s really you)</li>
          <li>Authorize access to Kampos features</li>
          <li>
            Send you important emails (like app updates, password resets, or
            maybe just a random “Hi” if we’re bored 😅)
          </li>
        </ul>

        <h3>👤 Profile Details</h3>
        <p>
          Kampos would just be a car without an engine (whatever that means 😅)
          if we didn’t have your personal info. This is what helps us
          personalize your experience and make Kampos feel like home. Here’s the
          kind of personal data we collect:
        </p>
        <ul>
          <li>
            <strong>First name &amp; Last name</strong> — gotta know who’s who.
          </li>
          <li>
            <strong>Institution / School name</strong> — so you can connect with
            others in your school (or find out what’s going down in OAU).
          </li>
          <li>
            <strong>Major / Discipline</strong> — helps us personalize things
            better.
          </li>
          <li>
            <strong>Level / Year of study</strong> — so we tailor what you see.
          </li>
          <li>
            <strong>Bio</strong> — tell us who you are and what you care about.
          </li>
          <li>
            <strong>Hobbies</strong> — dancing, designing, singing or sleeping,
            this helps us connect you with people like you.
          </li>
          <li>
            <strong>Profile Picture</strong> — upload yourself, your dog, or a
            picture of jollof rice. We won’t judge.
          </li>
          <li>
            <strong>Username / Avitag</strong> — this is how other students find
            you. Go wild.
          </li>
        </ul>
        <p>
          We collect these profile details to personalize your Kampos experience
          — showing you posts from your school, helping others find you, and
          connecting you with people who share your interests.{" "}
          <strong>We do not sell your personal info.</strong> You can update or
          delete your details anytime in your settings.
        </p>
        <p>
          Right now (as we launch our MVP), your profile info and posts are{" "}
          <strong>public to other Kampos users</strong> — that’s how people from
          your school or others can find you, follow your gist, or connect with
          you. But here’s the plan: we’re working on features that will let you{" "}
          <strong>control who sees what</strong> — like making your profile
          private or hiding certain posts. When that’s ready, you’ll be able to
          fine-tune your privacy just how you like it.
        </p>

        <h3>🧃 User-Generated Content (UGC)</h3>
        <p>
          This is the <strong>heartbeat of Kampos</strong> — the stories, gist,
          rants, and reactions that make the app come alive. Here’s what that
          includes:
        </p>
        <ul>
          <li>
            <strong>📝 Posts</strong> — we call this “Gist”. Whether you’re
            confessing your crush 👀 or ranting about your school’s eternal water
            problems 💧, these posts are what everyone vibes with the most.
          </li>
          <li>
            <strong>💬 Comments</strong> — they keep the conversations going:
            good, bad, or savage.
          </li>
          <li>
            <strong>📸 Media</strong> — your images and videos, from memes to
            birthday selfies to food photos.
          </li>
        </ul>
        <p>
          Everything you post, share, or upload on Kampos — we store it, display
          it, and sometimes moderate it. By posting, you agree that others can
          see it, and that we may use it to improve your experience on Kampos.
        </p>

        <h3>📱 Device Info</h3>
        <p>
          We may collect technical details about the phone or device you’re
          using — stuff like:
        </p>
        <ul>
          <li>Your device model (e.g. iPhone 13, Infinix Note 10)</li>
          <li>Operating system version (e.g. Android 13, iOS 17)</li>
          <li>Unique device identifiers</li>
          <li>App version</li>
          <li>Crash reports and error logs</li>
        </ul>
        <p>
          We collect device-related info to make Kampos stable, secure, and
          compatible with your phone.{" "}
          <strong>
            We don’t use this info to identify you personally, and we don’t sell
            or share it with advertisers.
          </strong>{" "}
          It’s strictly for making your Kampos experience smoother and safer.
        </p>

        <h3>📊 Usage Data</h3>
        <p>
          This is about how you use the app — don’t worry, we’re not stalking
          you. 😅 It may include:
        </p>
        <ul>
          <li>What screens or features you use</li>
          <li>Interaction data (like taps, scrolls, time spent)</li>
          <li>Login timestamps</li>
        </ul>
        <p>
          We use this to understand what features students love, improve what
          sucks, and decide what to build next. This data is anonymized and
          aggregated — meaning we study patterns, not people. We don’t track what
          you do outside the app, and we don’t sell your usage data.
        </p>
        <Callout>
          We never sell your data. Ever. This aligns with global data protection
          principles such as transparency, fairness, and purpose limitation.
        </Callout>
      </LegalSection>

      <LegalSection id="what-we-use" title="What do we use it for?">
        <h3>🧾 Account Information</h3>
        <ul>
          <li>To create and manage your account</li>
          <li>To authenticate and authorize access to features</li>
          <li>To send emails about updates, issues, password resets</li>
          <li>To keep your account secure and recoverable</li>
        </ul>
        <h3>📄 Profile Details</h3>
        <ul>
          <li>To identify you on Kampos</li>
          <li>To help other students find and connect with you</li>
          <li>To personalize your feed</li>
          <li>To show you’re actually a student, and not some random bot</li>
        </ul>
        <h3>📝 User-Generated Content (UGC)</h3>
        <ul>
          <li>To display your content publicly in the app</li>
          <li>To fuel interaction and engagement on Kampos</li>
          <li>To give you a space to express yourself and share updates</li>
          <li>To moderate harmful or inappropriate posts</li>
        </ul>
        <h3>📱 Device Information</h3>
        <ul>
          <li>To debug and fix bugs faster</li>
          <li>To optimize performance across different devices</li>
          <li>To understand technical issues affecting users</li>
        </ul>
        <h3>📊 Usage Data</h3>
        <ul>
          <li>To see what features students love or ignore</li>
          <li>To prioritize improvements or new features</li>
          <li>To spot and stop spam, abuse, or bots</li>
          <li>To understand student behavior trends</li>
        </ul>
        <Callout>
          We collect only what we truly need to deliver, maintain, and improve
          Kampos. We don’t sell your personal data. All usage is either for
          running the platform, improving your experience, or protecting users
          and Kampos.
        </Callout>
      </LegalSection>

      <LegalSection id="who-else" title="Who else needs it?">
        <p>
          <strong>We never sell your data.</strong> But to keep Kampos running,
          growing, and glitch-free, we sometimes need to share your info with a
          few third parties:
        </p>
        <ol>
          <li>
            <strong>Service Providers</strong> — the people that help Kampos
            work. We use third-party services to send OTPs and emails, host and
            store your data securely, monitor crashes, and understand how Kampos
            is used. These tools only get access to what they absolutely need,
            and they’re under strict agreements to keep your data private.
          </li>
          <li>
            <strong>Legal and Safety</strong> — sometimes we may have to share
            your info if the law requires it (like a court order), or if it’s
            necessary to protect Kampos, our users, or others (like preventing
            fraud or enforcing our rules).
          </li>
          <li>
            <strong>Other Users</strong> — because it’s a social app. Other
            users may see your posts, comments, school name, profile info, and
            any content you share. In the future, you’ll have more control over
            who sees what.
          </li>
        </ol>
        <Callout label="Example" tone="example">
          If someone’s using Kampos to do illegal things and the authorities come
          knocking, we have to cooperate. Just don’t get into trouble and we
          won’t have to talk to them. 😅
        </Callout>
        <Callout>
          We only share your data when it’s necessary, with people who help make
          Kampos better and safer for you. No shady business. No selling. No
          spam.
        </Callout>
      </LegalSection>

      <LegalSection id="your-control" title="What can you control?">
        <p>
          You’re in charge — it’s your data, after all. Here’s what you can do
          with it on Kampos:
        </p>
        <h3>Edit your profile</h3>
        <p>
          You can update your name, bio, hobbies, school, and all that stuff
          whenever you want. It’s your identity — feel free to switch it up.
        </p>
        <h3>Change your password</h3>
        <p>
          Lost your password or just paranoid that your roommate knows it? You
          can reset it anytime.
        </p>
        <h3>Visibility control (coming soon)</h3>
        <p>
          Right now, your profile and posts are public. But we’re working on
          settings that’ll let you control who sees your posts and what parts of
          your profile are visible. Stay tuned.
        </p>
        <h3>Delete your account</h3>
        <p>
          Need a break from Kampos? You can request to delete your account — we’ll
          remove your data as required by law. To do this easily, reach out to us
          at <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a> and we’ll handle it fast.
        </p>
        <h3>Access your data</h3>
        <p>
          You can ask us what personal data we have about you and we’ll share it
          — no mystery, no hidden files. Reach out to us at{" "}
          <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>.
        </p>
        <h3>Don’t want us using your data for something?</h3>
        <p>
          If you’re uncomfortable with how your data is being used, let us know.
          We’ll listen and try to make adjustments where possible. Talk to us
          first before calling your lawyer — we prefer conversations to
          courtrooms. 😅
        </p>
        <h3>Unsubscribe from emails</h3>
        <p>
          You’ll get emails for things like updates, password resets, and new
          features. If you’re not feeling them, you can unsubscribe (except for
          the essential ones).
        </p>
        <Callout>
          You’re the boss of your data. You can edit it, delete it, see it, or
          just yell at us nicely if you don’t like how something’s going. We’re
          building this for you — so you always have a say.
        </Callout>
      </LegalSection>

      <LegalSection id="retention" title="How long do we keep your data?">
        <p>
          We only keep your data for as long as we really need it. Here’s what
          that means:
        </p>
        <h3>While you’re actively using Kampos</h3>
        <p>We retain your:</p>
        <ul>
          <li>Account information (like your email, username)</li>
          <li>Profile details (like your bio, hobbies, major)</li>
          <li>Posts, comments, media (your gists, replies, images)</li>
          <li>Usage and device data</li>
        </ul>
        <h3>If you delete your account</h3>
        <ul>
          <li>
            Your profile is deactivated and your name/photo may be removed from
            public content.
          </li>
          <li>
            We delete most of your data from our active systems within{" "}
            <strong>30 days</strong>.
          </li>
          <li>
            Some backups or logs may still hold fragments of data for up to{" "}
            <strong>90 days</strong>, but they’re not used for anything.
          </li>
        </ul>
        <h3>In certain legal or security cases</h3>
        <p>We may retain specific data to comply with laws, prevent fraud or abuse, or investigate issues and protect others. In such cases, we only keep what’s needed — and no longer than necessary.</p>
        <h3>Anonymous data</h3>
        <p>
          Some non-personal data (like analytics) might be kept for research and
          reporting — but it can’t be tied back to you.
        </p>
      </LegalSection>

      <LegalSection id="protection" title="How do we protect your data?">
        <p>
          We know your data is precious — like the last slice of pizza at a group
          hangout. Here’s what we’re doing behind the scenes to keep it safe:
        </p>
        <h3>Data encryption</h3>
        <p>
          Whenever your data moves (like during sign up or login), it’s wrapped
          in strong encryption. We use HTTPS and TLS — techy terms for “no one
          else can see what’s going on.”
        </p>
        <h3>Access controls</h3>
        <p>
          Only trusted Kampos crew members who need to can access your info, and
          even then they only see what they must. Everyone signs agreements to
          keep things private.
        </p>
        <h3>Secure infrastructure</h3>
        <p>
          Your info lives on secure servers managed by trusted tech partners who
          take security seriously.
        </p>
        <h3>Vulnerability management</h3>
        <p>
          We’re constantly on the lookout for bugs or shady behavior. If
          something looks weird, we squash it fast, and updates happen regularly.
        </p>
        <h3>Incident response</h3>
        <p>
          If anything ever goes wrong (a breach or leak), we’ve got a plan. We’ll
          act fast, fix it, and let you know what happened and what we’re doing
          about it.
        </p>
        <p>
          That said, let’s be real: no system is 100% unbreakable. That’s why we
          encourage you to do your part too — use strong passwords, don’t share
          them, and be mindful of what you post. We can’t take responsibility for
          things beyond our control (like if your cousin guesses your password
          because it’s literally “password123”). You + us = safer Kampos.
        </p>
      </LegalSection>

      <LegalSection id="age" title="Wait, are you a kid?">
        <p>
          Kampos is for students in <strong>tertiary institutions only</strong>.
          That means if you’re not in a university, polytechnic, or college of
          education — you’re too young for this party. Sorry!
        </p>
        <p>
          We don’t knowingly collect or allow anyone who isn’t a bonafide student
          to use Kampos. If you’re <strong>under 13</strong>, you’re definitely
          not allowed here. If we find out otherwise, your account (and gist)
          will vanish like your data never existed.
        </p>
        <p>
          Parents or guardians — if you discover your child is somehow using
          Kampos without being eligible, reach out to us and we’ll handle it.
        </p>
        <Callout>
          Kampos does not knowingly collect data from individuals under the age
          of 13, in line with international child protection regulations.
        </Callout>
      </LegalSection>

      <LegalSection id="changes" title="Won’t there be changes?">
        <p>
          Kampos is growing fast, and sometimes that means our privacy policy has
          to grow too. If we ever change how we handle your data, you’ll be among
          the first to know. We’ll update this page and might even send you a very
          official-sounding email (with emojis, of course).
        </p>
        <p>
          We promise not to change things without letting you know. But it’s
          still a good idea to check this page every now and then.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Can you talk to us about something?">
        <p>Sureeeeeeeeeee!</p>
        <p>
          We’re very open at Kampos. If you have any questions, clarifications, or
          suggestions about our privacy policies or how we keep your data secure,
          please reach out to us. You can email us anytime at{" "}
          <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>.
        </p>
      </LegalSection>

      <LegalSection id="recap" title="Anything else? (Quick recap)">
        <p>
          If you didn’t read through everything, no worries — here’s a quick
          recap just for you:
        </p>
        <ul>
          <li>We protect and regulate your data the right way — no shady business.</li>
          <li>
            <strong>We never sell your data. Ever.</strong>
          </li>
          <li>
            You’re in control — you decide what you share and who sees it (more
            control coming soon!).
          </li>
          <li>
            We only share your info with trusted partners who help keep Kampos
            running smoothly and safely.
          </li>
          <li>If something feels off or you want to change how your data is used, just let us know.</li>
          <li>
            We work hard to keep your data safe, but no system is perfect — so
            keep your passwords strong and be careful what you share.
          </li>
          <li>
            Kampos is for students in tertiary institutions — sorry kids, you
            gotta wait a bit before joining the fun.
          </li>
          <li>We’re always here to chat if you have questions, concerns, or just wanna say hi.</li>
        </ul>
      </LegalSection>

      <LegalSection id="disclaimer" title="Disclaimer & limitation of liability">
        <p>
          While Kampos endeavors to protect your personal data and maintain a
          secure platform, no security system is impenetrable or completely
          error-free. This Privacy Policy does not purport to cover every
          scenario or risk associated with your use of Kampos. By accessing or
          using our services, you acknowledge and agree that Kampos shall not be
          held liable for any unauthorized access, data breaches, or other
          security incidents beyond our reasonable control.
        </p>
        <p>
          Furthermore, this policy does not constitute a comprehensive statement
          of all data protection practices, and Kampos reserves the right to
          update or modify these practices as necessary. Users assume all risks
          associated with the use of the platform and are encouraged to exercise
          caution and use strong security measures, such as robust passwords and
          safeguarding personal information.
        </p>
      </LegalSection>
    </LegalPage>
  );
};

export default PrivacyPolicy;
