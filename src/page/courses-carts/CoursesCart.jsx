import "./CoursesCart.css";

import BorderBtn from "../../components/border-btn/BorderBtn";
const CoursesCart = ({ imageBg, title, text, ltImage, onlinePeople }) => {
  return (
    <>
      <div className="courses_br-cart">
        <div className="courses-cart">
          <img src={imageBg} alt="book" />
          <div className="courses-text">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="cart-btn">
            <BorderBtn title="Kurs satyn alyň" />
          </div>
          <div className="coursesCart-footer">
            <input type="date" />
            <div className="online_people">
              <img src={ltImage} alt="people" />
              <h5>{onlinePeople}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesCart;
