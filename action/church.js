import {
  CHURCH_CREATE_REQUEST,
  CHURCH_CREATE_SUCCESS,
  CHURCH_CREATE_FAIL,
  CHURCH_LOGIN_REQUEST,
  CHURCH_LOGIN_SUCCESS,
  CHURCH_LOGIN_FAIL,
} from "../constants/churchConstants";

import axios from "axios";

export const createChurch = (dataToSubmit) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHURCH_CREATE_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();
    console.log(getState());
    const token = adminInfo && adminInfo.results.token;
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://gigalpharmovementjenkins.com/api/v1/church/new",
      dataToSubmit,
      config
    );

    dispatch({ type: CHURCH_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CHURCH_CREATE_FAIL, payload: message });
  }
};

export const loginChurch = (dataToSubmit) => async (dispatch) => {
  try {
    dispatch({ type: CHURCH_LOGIN_REQUEST });

    const { data } = await axios.post(
      "http://gigalpharmovementjenkins.com/api/v1/church/login",
      dataToSubmit
    );

    dispatch({ type: CHURCH_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CHURCH_LOGIN_FAIL, payload: message });
  }
};
