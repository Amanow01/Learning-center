import "./Header.css";

import header_logo from "./header-svg/Frame.svg";
import menu from "./header-img/menu.png";
import { useState } from "react";

const Header = () => {
  const [link, setLink] = useState(false);

  const clickMenu = () => {
    setLink((currentValue) => {
      return currentValue === !link ? "header_right" : "active";
    });
  };
  return (
    <>
      <header>
        <div className="wrapper flex item-center">
          <div className="header_left">
            <img src={header_logo} alt="header_logo" />
            <h1>Learning-center</h1>
          </div>
          <div
            className={
              link ? ["header_right", "active"].join(" ") : ["header_right"]
            }
          >
            <a href="#">Books</a>
            <a href="#">Courses</a>
            <a href="#">Others</a>
            <a href="#">Blog</a>
            <a href="#">Sing in</a>
          </div>
          <button onClick={clickMenu} className="menu">
            <img src={menu} alt="menu" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
