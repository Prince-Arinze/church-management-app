import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_CREATE_REQUEST,
  ADMIN_CREATE_SUCCESS,
  ADMIN_CREATE_FAIL,
  ADMIN_LIST_ROLE_REQUEST,
  ADMIN_LIST_ROLE_SUCCESS,
  ADMIN_LIST_ROLE_FAIL,
} from "../constants/adminConstants";
import axios from "axios";

export const login = (loginCred) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://gigalpharmovementjenkins.com/api/v1/auth/login",
      loginCred,
      config.headers
    );
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createAdmin = (dataToSubmit) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_CREATE_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();
    const token = adminInfo && adminInfo.results.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://gigalpharmovementjenkins.com/api/v1/auth/admin",
      dataToSubmit,
      config
    );

    dispatch({ type: ADMIN_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ADMIN_CREATE_FAIL, payload: message });
  }
};

export const listRoles = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_LIST_ROLE_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();
    const token = adminInfo.results && adminInfo.results.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      "http://gigalpharmovementjenkins.com/api/v1/role/all",
      config
    );
    dispatch({ type: ADMIN_LIST_ROLE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ADMIN_LIST_ROLE_FAIL, payload: message });
  }
};
