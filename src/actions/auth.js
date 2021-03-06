import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //signin the user
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //signup the user
    const { data } = await api.signUp(formData);
    //signin user
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
