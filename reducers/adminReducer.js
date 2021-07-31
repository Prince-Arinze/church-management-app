import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_CREATE_REQUEST,
  ADMIN_CREATE_SUCCESS,
  ADMIN_CREATE_FAIL,
  ADMIN_LIST_ROLE_REQUEST,
  ADMIN_LIST_ROLE_SUCCESS,
  ADMIN_LIST_ROLE_FAIL,
} from "../constants/adminConstants";
export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };

    case ADMIN_LOGIN_SUCCESS:
      return {
        loading: false,
        adminInfo: action.payload,
        success: action.payload.message,
      };

    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_CREATE_REQUEST:
      return { loading: true };
    case ADMIN_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ADMIN_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminRoleListsReducer = (state = { roles: [] }, action) => {
  switch (action.type) {
    case ADMIN_LIST_ROLE_REQUEST:
      return { loading: true };
    case ADMIN_LIST_ROLE_SUCCESS:
      return { loading: false, roles: action.payload };
    case ADMIN_LIST_ROLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
