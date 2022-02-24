import * as actionTypes from '../constants';
// action generator
export const getPosts = () => ({
  type: actionTypes.POSTS_REQUESTED,
});

export const getUser = () => ({
  type: actionTypes.USER_REQUESTED,
});

export const toggleFilterState = (payload) => ({
  type: actionTypes.TOGGLE_FILTER,
  payload,
});

export const changeSearchData = (payload) => ({
  type: actionTypes.CHANGE_SEARCH,
  payload,
});
