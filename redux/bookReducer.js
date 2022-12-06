// application state is handled by reducers
// change in application state
// calculates the next state based on the initial previous state

import {
  ADD_TO_BOOKMARK_LIST,
  GET_BOOKS,
  REMOVE_FROM_BOOKMARK_LIST,
} from "./actionTypes";
const initialState = {
  bookmarks: [],
  books: [],
};

export default function book(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    case ADD_TO_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (book) => book.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
