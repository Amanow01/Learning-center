import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Books from "./projects/books/Books";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

// <Router>
//
// </Router>;

//   <ScrollToTop />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/projects" element={<Projects />} />
//     <Route path="/resume" element={<Resume />} />
//     <Route path="/contacts" element={<Contacts />} />
//   </Routes>
//   <Footer />
