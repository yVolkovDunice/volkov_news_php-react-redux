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
  modalOpen: false,
  modalModeState: 'Login',
  isLoading: false,
  error: null,
  registerData: {},
  authorizedUser: Boolean(localStorage.getItem('token')),
};

function authReducer(state = initialState, action = {}) {
  const { payload, error } = action;
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: payload,
        error: null,
      };
    case MODAL_MODE:
      return {
        ...state,
        modalModeState: payload,
      };
    case SING_UP_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SING_UP_RECEIVED:
      return {
        ...state,
        registerData: payload,
        isLoading: false,
        modalOpen: false,
        error: null,
      };
    case SING_UP_REJECTED:
      return {
        ...state,
        registerData: {},
        isLoading: false,
        error,
      };
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_RECEIVED:
      return {
        ...state,
        registerData: {},
        isLoading: false,
        modalOpen: false,
        error: null,
        authorizedUser: true,
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        registerData: {},
        authorizedUser: false,
        error,
      };
    case LOGOUT:
      return {
        ...state,
        authorizedUser: false,
        error: null,
      };
    default:
      return state;
  }
}

export default authReducer;
