import Header from "../components/Header";
import BookCard from "../components/BookCard";
import { useSelector, useDispatch } from "react-redux";
import * as bookActions from "./../actions/bookAction";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(bookActions.getBooksRequest());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => navigate(`/details/${book.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
