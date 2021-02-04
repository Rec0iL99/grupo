import { ACTION_RESET } from '../actions/types';

const initialState = {
  loginData: {
    isLoading: false,
  },
  signUpData: {
    isLoading: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_RESET:
    default:
      return state;
  }
};

export default userReducer;
