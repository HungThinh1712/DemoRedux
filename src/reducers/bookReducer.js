import * as Types from "../constants/ActionType";
const initialState = {
  books: [],
  book: null,
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case Types.GET_BOOK_BY_ID:
      return {
        ...state,
        book: action.payload,
      };
    default:
      return state;
  }
}
