import "./Header.css";
import Hamburg from "./hamburg/Hamburg";

import header_logo from "./header-svg/Frame.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper flex item-center">
          <div className="header_left">
            <img src={header_logo} alt="header_logo" />
            <h1>Learning-center</h1>
          </div>
          <div className="header_right">
            <a href="#">Books</a>
            <a href="#">Courses</a>
            <a href="#">Others</a>
            <a href="#">Blog</a>
            <a href="#">Sing in</a>
          </div>

          <div className="hamburg">
            <Hamburg />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
