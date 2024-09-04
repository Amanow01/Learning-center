import "./AboutCart.css";
const AboutCart = ({ image, title, text }) => {
  return (
    <>
      <div className="border-cart">
        <div className="about-cart">
          <img src={image} alt="book" />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCart;
