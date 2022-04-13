import Header from "../components/Header";
import BookCardDetail from "../components/BookCardDetail";
import * as bookActions from "./../actions/bookAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
const BookDetailPage = () => {
  const dispatch = useDispatch();
  let params = useParams();

  const book = useSelector((state) => state.books.book);

  useEffect(() => {
    dispatch(bookActions.getBookByIdRequest(params.bookId));
  }, [dispatch, params.bookId]);

  return (
    <div>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        {book ? <BookCardDetail book={book}></BookCardDetail> : null}
      </div>
    </div>
  );
};

export default BookDetailPage;
