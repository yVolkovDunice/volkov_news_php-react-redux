import {
  POSTS_REQUESTED,
  POSTS_RECEIVED,
} from '../constants';

const initialState = {
  loading: false,
  error: '',
  news: [],
};
function postReducer(state = initialState, action = {}) {
  const { response } = action;
  switch (action.type) {
    case POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        news: response,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}
export default postReducer;
