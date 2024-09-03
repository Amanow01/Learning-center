import "./Header.css";

import header_logo from "./header-svg/Frame.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [link, setLink] = useState(false);

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
          <div onClick={() => setLink(!link)} className="menu">
            {link ? (
              <AiOutlineClose size={"1.5rem"} />
            ) : (
              <AiOutlineMenu size={"1.5rem"} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
