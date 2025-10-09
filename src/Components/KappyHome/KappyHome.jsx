import "./KappyHome.css";

import Header from "../../SubComponents/Header/Header";

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
    </main>
  );
};

export default KappyHome;
