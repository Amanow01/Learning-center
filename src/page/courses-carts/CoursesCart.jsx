import "./CoursesCart.css";
import Matematika from "../../components/main/main-components/online-courses/courses-png/matematika.svg";
import people from "../../components/main/main-components/online-courses/courses-png/online people.svg";
import BorderBtn from "../../components/border-btn/BorderBtn";
const CoursesCart = () => {
  return (
    <>
      <div className="courses_br-cart">
        <div className="courses-cart">
          <img src={Matematika} alt="book" />
          <div className="courses-text">
            <h3>Matematika</h3>
            <p>Bellik</p>
          </div>
          <div className="cart-btn">
            <BorderBtn title="Kurs satyn alyň" />
          </div>
          <div className="coursesCart-footer">
            <input type="date" />
            <div className="online_people">
              <img src={people} alt="people" />
              <h5>60 adam</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesCart;
