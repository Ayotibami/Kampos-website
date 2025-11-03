import "./KappyHomeFooter.css";
import { Link } from "react-router-dom";

const KappyHomeFooter = () => {
  return (
    <footer className="kappy-home-footer">
      <main className="kappy-home-footer-main">
        <section>
          <figure>
            <img src="Images/kappy black.png" alt="kappy" />
          </figure>

          <div>
            <ul>
              <li>
                <Link>Contact us</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Terms and conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <Link>Bug report</Link>
              </li>
              <li>
                <Link>Feature Requests</Link>
              </li>
              <li>
                <Link>Support center</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </section>

        <div className="kappy-home-footer-div">
          <p>© 2025 Ayoti. All rights reserved.</p>
          <div>
            <img src="Images/x.png" alt="X" />
            <img src="Images/instagram.png" alt="instagram" />
            <img src="Images/whatsapp.png" alt="Whatsapp" />
            <img src="Images/msg.png" alt="msg" />
          </div>
        </div>
      </main>
    </footer>
  );
};

export default KappyHomeFooter;
