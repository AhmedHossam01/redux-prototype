import { FETCH_POSTS } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  if (action.type === FETCH_POSTS) {
    return { ...state, items: action.payload };
  }
  return state;
}
