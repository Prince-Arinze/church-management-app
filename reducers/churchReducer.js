import {
  CHURCH_CREATE_FAIL,
  CHURCH_CREATE_REQUEST,
  CHURCH_CREATE_SUCCESS,
  CHURCH_LOGIN_FAIL,
  CHURCH_LOGIN_REQUEST,
  CHURCH_LOGIN_SUCCESS,
  CHURCH_LIST_REQUEST,
  CHURCH_LIST_SUCCESS,
  CHURCH_LIST_FAIL,
} from "../constants/churchConstants";

export const churchCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CHURCH_CREATE_REQUEST:
      return { loading: true };
    case CHURCH_CREATE_SUCCESS:
      return { loading: false, success: true, church: action.payload };
    case CHURCH_CREATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const churchLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case CHURCH_LOGIN_REQUEST:
      return { loading: true };
    case CHURCH_LOGIN_SUCCESS:
      return {
        loading: false,
        success: action.payload.message,
        church: action.payload,
      };
    case CHURCH_LOGIN_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const churchListsReducer = (state = { roles: [] }, action) => {
  switch (action.type) {
    case CHURCH_LIST_REQUEST:
      return { loading: true };
    case CHURCH_LIST_SUCCESS:
      return { loading: false, churches: action.payload, success: true };
    case CHURCH_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
