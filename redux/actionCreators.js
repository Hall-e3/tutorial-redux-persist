import axios from "axios";
import { BASE_URL } from "../config";
import {
  ADD_TO_BOOKMARK_LIST,
  GET_BOOKS,
  REMOVE_FROM_BOOKMARK_LIST,
} from "./actionTypes";

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${BASE_URL}`);
      if (data) {
        dispatch({
          type: GET_BOOKS,
          payload: data,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const addBookmark = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};
