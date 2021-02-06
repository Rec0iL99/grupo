import {
  ACTION_RESET,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from '../actions/types';

const initialState = {
  loginData: {
    isLoading: false,
  },
  signupData: {
    isLoading: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginData: {
          error: false,
          isLoading: true,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: {
          isLoading: false,
          data: action.payload,
        },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginData: {
          isLoading: false,
          error: action.payload,
        },
      };
    case SIGNUP_LOADING:
      return {
        ...state,
        signupData: {
          error: false,
          isLoading: true,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupData: {
          isLoading: false,
          data: action.payload,
        },
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signupData: {
          isLoading: false,
          error: action.payload,
        },
      };
    case ACTION_RESET:
      return {
        ...state,
        loginData: {
          error: false,
          data: false,
        },
        signupData: {
          error: false,
          data: false,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
