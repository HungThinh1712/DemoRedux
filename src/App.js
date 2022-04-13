import { Routes, Route } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./style.css";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import AboutUsPage from "./pages/AbouUsPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:bookId" element={<BookDetailPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
