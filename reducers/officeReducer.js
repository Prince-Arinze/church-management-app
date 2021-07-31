import {
  CREATE_OFFICE_FAIL,
  CREATE_OFFICE_REQUEST,
  CREATE_OFFICE_SUCCESS,
} from "../constants/officeConstant";

export const officeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_OFFICE_REQUEST:
      return { loading: true };
    case CREATE_OFFICE_SUCCESS:
      return { loading: false, success: true, office: action.payload };
    case CREATE_OFFICE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
