import {
  POSTS_REQUESTED,
  POSTS_RECEIVED,
  POSTS_REJECTED,
} from '../constants';

const initialState = {
  loading: false,
  error: '',
  news: [],
};
function postReducer(state = initialState, action = {}) {
  const { response, error } = action;
  switch (action.type) {
    case POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        news: response,
        loading: false,
        error: '',
      };
    case POSTS_REJECTED:
      return {
        ...state,
        news: [],
        loading: false,
        error,
      };
    default:
      return state;
  }
}
export default postReducer;
