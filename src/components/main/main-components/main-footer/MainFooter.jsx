import "./MainFooter.css";
import imageAvatar from "./mainFooter-image/imageAvatar.jpg";
const MainFooter = () => {
  return (
    <main>
      <>
        <div className="main-footerBackground">
          <div className="lt-wrapper_noCenter">
            <div className="main-footer">
              <div className="flex item-center col-gap2rem mob-content mob-p">
                <div className="image-border">
                  <img src={imageAvatar} alt="imageAvatar" />
                </div>
                <div className="mainFooter-text ">
                  <h3>Elmydama kämillige tarap barýarys.</h3>
                  <p>
                    Biziň mugallymlarymyz elmydama kämilleşmek üçin işleri alyp
                    barýarlar. Okuw merkezimizde yzygiderli ýagdaýda
                    mugallymlaryň okadyş metodlaryny kämilleşdirmek üçin ýörite
                    treningler geçirilýär.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
};

export default MainFooter;
