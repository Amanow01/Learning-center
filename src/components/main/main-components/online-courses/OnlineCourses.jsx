import CoursesCart from "../../../../page/courses-carts/CoursesCart";
import "./OnlineCourses.css";
const OnlineCourses = () => {
  return (
    <main>
      <div className="lt-wrapper_noCenter">
        <h1 className="courses_header">Onlaýn kurslar</h1>
        <div className="flex item-center">
          <CoursesCart />
        </div>
      </div>
    </main>
  );
};

export default OnlineCourses;
