import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import {
  adminLoginReducer,
  adminCreateReducer,
  adminRoleListsReducer,
} from "../reducers/adminReducer";
import { createRoleReducer } from "../reducers/roleReducer";
import {
  churchCreateReducer,
  churchLoginReducer,
} from "../reducers/churchReducer";
import { officeCreateReducer } from "../reducers/officeReducer";
import {
  categoryCreateReducer,
  categoryListsReducer,
} from "../reducers/categoryReducer";
import { createMembersReducer } from "../reducers/memberReducer";

const reducers = combineReducers({
  // all the reducers will be in here
  adminLogin: adminLoginReducer,
  adminCreate: adminCreateReducer,
  listAdminRole: adminRoleListsReducer,
  roleCreate: createRoleReducer,
  churchCreate: churchCreateReducer,
  churchLogin: churchLoginReducer,
  officeCreate: officeCreateReducer,
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListsReducer,
  memberCreate: createMembersReducer,
});

let localData =
  typeof window !== "undefined" && localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null;

const initialState = {
  adminLogin: {
    adminInfo: localData,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
