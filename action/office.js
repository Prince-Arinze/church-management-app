import axios from "axios";
import {
  CREATE_OFFICE_FAIL,
  CREATE_OFFICE_REQUEST,
  CREATE_OFFICE_SUCCESS,
} from "../constants/officeConstant";

export const createOffices = (dataToSubmit) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_OFFICE_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();
    const token = adminInfo && adminInfo.results.token;
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://gigalpharmovementjenkins.com/api/v1/office/new",
      dataToSubmit,
      config
    );
    dispatch({ type: CREATE_OFFICE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_OFFICE_FAIL, payload: message });
  }
};
