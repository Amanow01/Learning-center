import "../border-btn/BorderBtn.css";
const BorderBtn = ({ title }) => {
  return (
    <>
      <div className="button">
        <a href="#">{title}</a>
      </div>
    </>
  );
};

export default BorderBtn;
