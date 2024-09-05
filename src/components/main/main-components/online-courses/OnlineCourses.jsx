import "./OnlineCourses.css";
import CoursesCart from "../../../../page/courses-carts/CoursesCart";
import { courses_info } from "../online-courses/courses_info";
const OnlineCourses = () => {
  return (
    <main>
      <div className="background-content">
        <div className="lt-wrapper_noCenter">
          <h1 className="courses_header">Onlaýn kurslar</h1>
          <div className="flex item-center col-gap1_5rem mob-content mob-p ">
            {courses_info.map((courses_map) => {
              return (
                <>
                  <CoursesCart
                    key={courses_map.it}
                    imageBg={courses_map.imageBg}
                    title={courses_map.title}
                    text={courses_map.text}
                    ltImage={courses_map.ltImage}
                    onlinePeople={courses_map.onlinePeople}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OnlineCourses;
