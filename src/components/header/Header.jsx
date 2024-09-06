import { NavLink } from "react-router-dom";
import "./Header.css";
import BorderBtn from "../border-btn/BorderBtn";
import Hamburg from "./hamburg/Hamburg";

import header_logo from "./header-svg/Frame.svg";
import leksia from "./header-svg/leksia.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="pb-5_8125rem flex item-center">
            <div className="header_left">
              <img src={header_logo} alt="header_logo" />
              <h1>Okuw-merkezi</h1>
            </div>
            <nav className="header_right">
              <a href="#">Kitaplar</a>
              <a href="#">Dersler</a>
              <a href="#">Registrasiýa</a>
            </nav>
            <button className="hamburg">
              <Hamburg />
            </button>
          </div>
          {/* 2-part */}
          <div className="flex item-center lt-wrapper   mob-p mob-content">
            <div className="left_content">
              <h3>Öwrenmäge taýynmy?</h3>
              <div className="mob-fs">
                <h1>
                  Oka <span className="green-text">öwren </span>döret
                </h1>
              </div>
              <p>
                Diňe biziň merkezimizde çagalary söýýän we işine wepaly ýokary
                hünärli we döredijilik mugallymlary işleýär.
              </p>
              <div className="btn-size ">
                <BorderBtn title="Başlat" />
              </div>
            </div>
            <div className="right_content">
              <img src={leksia} alt="leksia" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
