import "./Main.css";
import About from "./main-components/about/About";
import MainFooter from "./main-components/main-footer/MainFooter";
import OnlineCourses from "./main-components/online-courses/OnlineCourses";
const Main = () => {
  return (
    <main>
      <About />
      <OnlineCourses />
      <MainFooter />
    </main>
  );
};

export default Main;
