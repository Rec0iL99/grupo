import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  PRECHECK_LOADING,
  PRECHECK_SUCCESS,
  PRECHECK_FAIL,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  ACTION_RESET,
} from '../actions/types';

const initialState = {
  loginData: {
    isLoading: false,
  },
  signupData: {
    isLoading: false,
  },
  preCheckData: {
    isLoading: false,
  },
  logoutData: {
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
    case PRECHECK_LOADING:
      return {
        ...state,
        preCheckData: {
          error: false,
          isLoading: true,
        },
      };
    case PRECHECK_SUCCESS:
      return {
        ...state,
        preCheckData: {
          isLoading: false,
          data: action.payload,
        },
      };
    case PRECHECK_FAIL:
      return {
        ...state,
        preCheckData: {
          isLoading: false,
          error: action.payload,
        },
      };
    case LOGOUT_LOADING:
      return {
        ...state,
        logoutData: {
          error: false,
          isLoading: true,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutData: {
          isLoading: false,
          data: action.payload,
        },
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        logoutData: {
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
        preCheckData: {
          error: false,
          data: false,
        },
        logoutData: {
          error: false,
          data: false,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
