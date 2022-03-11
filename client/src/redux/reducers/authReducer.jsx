import {
  TOGGLE_MODAL,
  MODAL_MODE,
  SING_UP_REQUESTED,
  SING_UP_RECEIVED,
  SING_UP_REJECTED,
  LOGIN_REQUESTED,
  LOGIN_RECEIVED,
  LOGIN_REJECTED,
  LOGOUT,
} from '../constants';

const initialState = {
  modalIsOpen: false,
  modalMode: 'Login',
  isLoading: false,
  error: null,
  userIsLogged: Boolean(localStorage.getItem('token')),
};

function authReducer(state = initialState, action = {}) {
  const { payload, error } = action;
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: payload,
        error: null,
      };
    case MODAL_MODE:
      return {
        ...state,
        modalMode: payload,
      };
    case SING_UP_REQUESTED:
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SING_UP_RECEIVED:
      return {
        ...state,
        isLoading: false,
        modalIsOpen: false,
        error: null,
      };
    case SING_UP_REJECTED:
      return {
        ...state,
        isLoading: false,
        error,
      };
    case LOGIN_RECEIVED:
      return {
        ...state,
        isLoading: false,
        modalIsOpen: false,
        error: null,
        userIsLogged: true,
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        userIsLogged: false,
        error,
      };
    case LOGOUT:
      return {
        ...state,
        userIsLogged: false,
        error: null,
      };
    default:
      return state;
  }
}

export default authReducer;
