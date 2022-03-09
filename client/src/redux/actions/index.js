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

export const toggleModal = (payload) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload,
});

export const modalMode = (payload) => ({
  type: actionTypes.MODAL_MODE,
  payload,
});

export const authRegister = (payload) => ({
  type: actionTypes.SING_UP_REQUESTED,
  payload,
});

export const authLogin = (payload) => ({
  type: actionTypes.LOGIN_REQUESTED,
  payload,
});

export const authLogout = () => ({
  type: actionTypes.LOGOUT,
});
