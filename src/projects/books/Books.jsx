import "./Books.css";
import { booksInfo } from "../books/booksInfo";
import BorderBtn from "../../components/border-btn/BorderBtn";
const Books = () => {
  return (
    <>
      <main className="wrapper">
        <div className="book-carts mob-content mob-p py-2rem">
          {booksInfo.map((booksMap) => {
            return (
              <>
                <div key={booksMap.id} className="books_br-cart">
                  <div className="books-cart">
                    <img src={booksMap.imageBg} alt="book" />
                    <div className="books-text">
                      <h3>{booksMap.title}</h3>
                      <p>{booksMap.text}</p>
                    </div>
                    <div className="cart-btn">
                      <BorderBtn title="Okamak" />
                    </div>
                    <div className="booksCart-footer">
                      <input type="date" />
                      <div className="online_people">
                        <img src={booksMap.ltImage} alt="people" />
                        <h5>{booksMap.onlinePeople}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Books;
