import axios from "axios";
import {
  CREATE_ROLE_FAIL,
  CREATE_ROLE_REQUEST,
  CREATE_ROLE_SUCCESS,
} from "../constants/roleConstant";

export const createRole = (dataToSubmit) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ROLE_REQUEST });
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
      "http://gigalpharmovementjenkins.com/api/v1/role/new",
      dataToSubmit,
      config
    );
    dispatch({ type: CREATE_ROLE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREATE_ROLE_FAIL, payload: message });
  }
};
