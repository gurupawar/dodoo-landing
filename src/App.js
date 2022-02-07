import "./css/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyDodoo from "./components/WhyDodoo";
import Services from "./components/Services";
import HowtoOrder from "./components/HowtoOrder";
import DownloadNow from "./components/DownloadNow";
import GetInTouch from "./components/GetInTouch";
import { fb, whatsapp, phone, gmail } from "./assets/index";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyDodoo />
      <Services />
      <HowtoOrder />
      <DownloadNow />
      <GetInTouch />
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <span>Gulzarpeta, Anantapur, Andhra Pradesh, India</span>
            <span className="footer__credit">
              ©2018. All rights reserved. Powered By Moyo Solutions
            </span>
            <div className="footer__social__link">
              <ul>
                <li>
                  <a href="https://exmaple.com">
                    <img src={fb} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://exmaple.com">
                    <img src={whatsapp} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://exmaple.com">
                    <img src={phone} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://exmaple.com">
                    <img src={gmail} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
