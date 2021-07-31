import {
  CREATE_ROLE_FAIL,
  CREATE_ROLE_REQUEST,
  CREATE_ROLE_SUCCESS,
} from "../constants/roleConstant";

export const createRoleReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ROLE_REQUEST:
      return { loading: true };
    case CREATE_ROLE_SUCCESS:
      return { loading: false, role: payload, success: true };
    case CREATE_ROLE_FAIL:
      return { loading: false, error: payload, success: false };
    default:
      return state;
  }
};
