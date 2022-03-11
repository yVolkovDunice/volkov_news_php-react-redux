import {
  POSTS_REQUESTED,
  POSTS_RECEIVED,
  POSTS_REJECTED,
  TOGGLE_FILTER,
  CHANGE_SEARCH,
} from '../constants';

const initialState = {
  auth: null,
  isLoading: false,
  error: null,
  posts: [],
  filterType: 'all',
  searchData: null,
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
    case TOGGLE_FILTER:
      return {
        ...state,
        filterType: payload,
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        searchData: payload,
      };
    default:
      return state;
  }
}

export default postReducer;
