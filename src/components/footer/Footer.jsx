import "./Footer.css";
import logo from "..//header/header-svg/Frame.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer-background">
        <div className="lt-wrapper_noCenter py-3rem">
          <div className="flex item-center col-gap4rem mob-content mob-p ">
            <div className="left-block_footer">
              <img src={logo} alt="" />
              <p>Okuw merkezi</p>
            </div>
            <div className="right-block_footer">
              <details>
                <summary>Email</summary>
                <em>hanmamedow05gmail.com</em>
              </details>
              <details>
                <summary>Telefon</summary>
                <em>(+993) xx-xx-xx</em>
              </details>
              <details>
                <summary>Salgymyz</summary>
                <em>Turkmenabat şäheri</em>
              </details>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
