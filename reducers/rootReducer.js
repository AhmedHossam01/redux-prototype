import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  posts: postsReducer,
  paginationData: paginationReducer
});
