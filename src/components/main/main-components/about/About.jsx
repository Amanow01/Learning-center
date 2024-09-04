import "../../Main.css";
import AboutCart from "../../../../page/about-carts/AboutCart";
import { AboutInfo } from "./info";
const About = () => {
  return (
    <main>
      <div className="flex lt-wrapper_noCenter speak-between">
        {AboutInfo.map((Aboutmaps, index) => {
          return (
            <>
              <AboutCart
                key={index}
                image={Aboutmaps.image}
                title={Aboutmaps.title}
                text={Aboutmaps.text}
              />
            </>
          );
        })}
      </div>
    </main>
  );
};

export default About;
