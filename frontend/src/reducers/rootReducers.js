import LoginReducers from "./LoginReducers";

import LoaderReducer from "./loaderReducer";
import { combineReducers } from "redux";
import CityReducer from "./CityReducer";

export default combineReducers({
  LoginReducers: LoginReducers,
  CityReducer: CityReducer,
  LoaderReducer: LoaderReducer,
});
