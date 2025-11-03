import "./Chefs.css";
import "./Chefs1.css";

import Header from "../../SubComponents/Header/Header";
import KappyHomeFooter from "../../SubComponents/KappyHomeFooter/KappyHomeFooter";
import Cards1 from "../../SubComponents/Cards1/Cards1";

const Chefs = () => {
  return (
    <main className="chefs-main">
      <Header />

      <section className="chefs-first-sec">
        <h1>Built by Students, for </h1>
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

      {/* Second Section */}
      <section className="chefs-second-sec">
        <figure>
          <img src="Images/chef group.png" alt="" />
        </figure>
        <div className="chefs-second-sec-div">
          <div>
            <div className="chefs-second-sec-child-div">
              <h1>Mission Statement</h1>
              <p>
                We’re building Kampos — a one-stop campus ecosystem for Nigerian
                students that packs all the gist, vibes, stories, learning, and
                everything campus into one place. Our passion? Making sure every
                student catches the best vibes and truly lives their best campus
                life
              </p>
            </div>
            <figure>
              <img src="Images/stickers target.png" alt="stickers target" />
            </figure>
          </div>
        </div>
      </section>
      {/* Third Section */}
      <section>
        <div>
          <h1>Meet the Chefs</h1>
          <p>
            Kampos would have been like the sci-fi time machine — the one that
            hasn’t been built yet but we all believe will come someday. But
            thanks to an amazing team that keeps cooking, building, and pushing,
            Kampos is no longer just an idea — it’s becoming reality. Meet the
            wonderful crew making it happen.
          </p>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="chefs-fourth-sec">
        <div>
          <div>
            <h1>Vision Statement</h1>
            <p>To make campus life smarter, fun, and more connected</p>
          </div>
          <figure>
            <img src="Images/lightbulb.png" alt="stickers target" />
          </figure>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="chefs-fifth-sec">
        <div className="chefs-fifth-sec-div-1">
          <h1>You know Kampos right?</h1>
          <p>
            Kampos is the app where you catch the latest news, stories, school
            updates, and gist straight from your fellow students on campus. It’s
            the platform that finally connects students to their campus life —
            all in one place.
          </p>
        </div>

        <div className="chefs-fifth-sec-div-2">
          <Cards1
            card1Heading="Connect with students on your campus"
            card1Text="Build meaningful interactions with peers across different levels and departments, fostering a stronger sense of community."
            card1Img="frame 4"
          />
          <Cards1
            card1Heading="Catch every trending story"
            card1Text="Stay engaged with the latest conversations, stories, and happenings that define campus life."
            card1Img="frame 5"
          />
          <Cards1
            card1Heading="Share your voice and creativity"
            card1Text="Post stories, opinions, and content, giving students a platform to express themselves and be heard."
            card1Img="frame 6"
          />
          <Cards1
            card1Heading="Stay updated on school news"
            card1Text="Get the latest updates, circulars, and information  — no more being left out of what’s happening."
            card1Img="frame 7"
          />
        </div>
      </section>

      {/* Sixth Section */}
      <section className="chefs-sixth-sec">
        <figure>
          <img src="Images/mobile.png" alt="Mobile phone" />
        </figure>

        <div>
          <h1>Anything for us ?</h1>
          <p>
            Got ideas, feedback, or just pure vibes? Hit us up anytime — we’ll
            always reply. After all, Kampos is something we’re building together
          </p>
          <button>
            <img src="Images/kappy 1.png" alt="kappy" />
            Contact us
          </button>
        </div>
      </section>
      <KappyHomeFooter />
    </main>
  );
};

export default Chefs;
