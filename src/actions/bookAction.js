import * as Types from "../constants/ActionType";
import axios from "axios";

const API_URL = "https://localhost:7265/";

export const getBooksRequest = () => (dispatch) => {
  const url = API_URL.concat("api/Books");
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: Types.GET_BOOKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Error" + err);
    });
};

export const getBookByIdRequest = (id) => (dispatch) => {
  const url = API_URL.concat(`api/Books/${id}`);
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: Types.GET_BOOK_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Error" + err);
    });
};
