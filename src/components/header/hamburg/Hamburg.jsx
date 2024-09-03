import "./Hamburg.css";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Hamburg = () => {
  const [link, setLink] = useState(false);
  return (
    <>
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
    </>
  );
};

export default Hamburg;
