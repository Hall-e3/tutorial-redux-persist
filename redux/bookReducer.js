// application state is handled by reducers
// change in application state
// calculates the next state based on the initial previous state

import { GET_BOOKS } from "./actionTypes";
const initialState = {
  bookmarks: [],
  books: [],
};

export default function book(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}
