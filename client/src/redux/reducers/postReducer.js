import {
  POSTS_REQUESTED,
  POSTS_RECEIVED,
  POSTS_REJECTED,
} from '../constants';

const initialState = {
  isLoading: false,
  error: null,
  posts: [],
};
function postReducer(state = initialState, action = {}) {
  const { payload, error } = action;
  switch (action.type) {
    case POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        posts: payload,
        isLoading: false,
        error: null,
      };
    case POSTS_REJECTED:
      return {
        ...state,
        posts: [],
        isLoading: false,
        error,
      };
    default:
      return state;
  }
}
export default postReducer;
