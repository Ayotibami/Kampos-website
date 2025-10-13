import "./KappyHome.css";
import Header from "../../SubComponents/Header/Header";
import Cards1 from "../../SubComponents/Cards1/Cards1";
import Card2 from "../../SubComponents/Card2/Card2";

const KappyHome = () => {
  return (
    <main className="kappy-home-main">
      <Header />

      <section className="kappy-home-first-sec">
        <h1>Kampos</h1>
        <h5>Your campus life in one app.</h5>
        <p>
          Kampos connects students to their campuses. From official updates and
          announcements to wild rants, gists, and hot takes, Kampos drops you
          right in the middle of all the vibes — bringing your entire campus
          life straight to your phone.
        </p>

        <div>
          <button className="kappy-home-btn-1">
            <img src="Images/play store.png" alt="" />
            Download on playstore
          </button>
          <button className="kappy-home-btn-2">
            <img src="Images/apple.png" alt="" />
            Download on IOS store
          </button>
        </div>
      </section>
      <section className="kappy-home-second-sec">
        <img src="Images/kappy group 11.jpg" alt="kappy " />
      </section>
      <section className="kappy-home-third-sec">
        <div></div>
      </section>

      <section className="kappy-home-fourth-sec">
        <h1>Why Kampos?</h1>
        <p>
          Students miss important updates, gist scatters across different
          platforms, and there’s no single space just for them. That’s the
          problem Kampos is solving.
        </p>
      </section>

      <section className="kappy-home-fifth-sec">
        <div className="kappy-home-fifth-sec-div-1">
          <h1>With Kampos you can ?</h1>
          <p>
            👥 Connect with thousands of students on your campus From freshers
            to finals, from your crush to your homies — everybody jams on
            Kampos.
          </p>
        </div>
        <div className="kappy-home-fifth-sec-div-2">
          <Cards1
            card1Heading="🔥 Be at the center of every trending gist and vibe"
            card1Text="From rants to banters to viral stories, you’ll never miss what’s popping on campus again."
            card1Img="frame 1"
          />
          <Cards1
            card1Heading="📰 Stay updated on official school news"
            card1Text="Catch circulars, memos, and announcements the moment they drop — no more “I no hear.” "
            card1Img="frame 2"
          />
          <Cards1
            card1Heading="🎓 Flex your Kampos identity"
            card1Text="Rep your school, flex your major & show off your level — Kampos is your ID card with vibes."
            card1Img="frame 3"
          />
        </div>
      </section>

      <section className="kappy-home-sixth-sec">
        <div className="kappy-home-sixth-sec-div-1">
          <h1>Testimonials</h1>
          <p>
            We’re not building Kampos for ourselves or out of boredom — we’re
            building it for students. That’s why we’ve carried them along at
            every step of the journey, to truly satisfy their cravings. And
            guess what? They love it. From the hundreds already in our community
            to the over a thousand students on our waitlist, the excitement is
            real. We even asked some of them to share their thoughts about
            Kampos — here’s what they had to say:
          </p>
        </div>

        <div className="kappy-home-sixth-sec-div-2">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </section>

      <section className="kappy-home-seventh-sec">
        <figure>
          <img src="Images/chefs.png" alt="kappy " />
        </figure>

        <div>
          <h1>Who are we?</h1>
          <p>
            Kampos is built by students, for students.We built Kampos because we
            knew students truly needed a space that actually feels like campus —
            with all the energy and vibes. Already trusted by 1,000+ students
            across Nigeria.
          </p>
          <button>
            <img src="Images/kappy 1.png" alt="kappy " />
            Meet the chefs
          </button>
        </div>
      </section>
    </main>
  );
};

export default KappyHome;
