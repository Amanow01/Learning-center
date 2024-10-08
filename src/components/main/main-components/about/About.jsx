import "../../Main.css";
import AboutCart from "../../../../page/about-carts/AboutCart";
import { AboutInfo } from "./info";
const About = () => {
  return (
    <main>
      <div className="flex lt-wrapper_noCenter speak-between mob-content mb-6_5625rem">
        {AboutInfo.map((Aboutmaps) => {
          return (
            <>
              <AboutCart
                key={Aboutmaps.id}
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
