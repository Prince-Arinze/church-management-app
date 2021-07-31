import {
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAIL,
} from "../constants/categoryConstant";

export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case CATEGORY_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload.message,
        category: action.payload,
      };
    case CATEGORY_CREATE_FAIL:
      return {
        loading: false,
        success: action.payload.message,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const categoryListsReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return { loading: true };
    case FETCH_CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload.results,
        success: action.payload.message,
      };
    case FETCH_CATEGORY_FAIL:
      return { loading: false, error: action.payload.message };
    default:
      return state;
  }
};
