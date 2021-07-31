import {
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAIL,
} from "../constants/categoryConstant";
import axios from "axios";

export const createCategory = (dataToSubmit) => async (dispatch, getState) => {
  try {
    dispatch({ type: CATEGORY_CREATE_REQUEST });
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
      "http://gigalpharmovementjenkins.com/api/v1/mem_category/new",
      dataToSubmit,
      config
    );

    console.log("This is the data", data);

    dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data });
    console.log("success");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_CREATE_FAIL, payload: message });
  }
};

export const listCategories = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_CATEGORY_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();
    const token = adminInfo.results && adminInfo.results.token;
    const churchId = adminInfo.results && adminInfo.results.church._id;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `http://gigalpharmovementjenkins.com/api/v1/mem_category/all/${churchId}`,
      config
    );
    dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: FETCH_CATEGORY_FAIL, payload: message });
  }
};
