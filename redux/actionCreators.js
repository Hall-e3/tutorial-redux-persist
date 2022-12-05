import axios from "axios";
import { BASE_URL } from "../config";
import { GET_BOOKS } from "./actionTypes";

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${BASE_URL}`);
      if (response.data) {
        dispatch({
          type: GET_BOOKS,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};
