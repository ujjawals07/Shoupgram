import { combineReducers } from "redux";
import Postreducer from "./PostReducer";

export default combineReducers({
  Post: Postreducer,
});
