import {
  MEMBER_CREATE_REQUEST,
  MEMBER_CREATE_SUCCESS,
  MEMBER_CREATE_FAIL,
} from "../constants/memberConstants";

export const createMembersReducer = (state = {}, action) => {
  switch (action.type) {
    case MEMBER_CREATE_REQUEST:
      return { loading: true };
    case MEMBER_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload.message,
        member: action.payload,
      };
    case MEMBER_CREATE_FAIL:
      return {
        loading: false,
        success: action.payload.message,
        error: action.payload,
      };
    default:
      return state;
  }
};
