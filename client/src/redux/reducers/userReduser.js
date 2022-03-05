import {
  SING_UP,
  // LOGIN,
  // LOGOUT,
} from '../constants';

const initialState = {
  authorizing: null,
  error: null,
};

function postReducer(state = initialState, action = {}) {
  const { payload } = action;
  switch (action.type) {
    case SING_UP:
      return {
        ...state,
        modalModeState: payload,
      };
    default:
      return state;
  }
}

export default postReducer;
