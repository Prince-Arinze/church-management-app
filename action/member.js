import {
  MEMBER_CREATE_FAIL,
  MEMBER_CREATE_REQUEST,
  MEMBER_CREATE_SUCCESS,
} from "../constants/memberConstants";

export const createMember = (dataToSubmit) => async (dispatch, getState) => {
  try {
    dispatch({ type: MEMBER_CREATE_REQUEST });
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
      "http://gigalpharmovementjenkins.com/api/v1/member/new",
      dataToSubmit,
      config
    );

    dispatch({ type: MEMBER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MEMBER_CREATE_FAIL, payload: message });
  }
};
