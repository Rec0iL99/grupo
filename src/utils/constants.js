// User API constants
export const REGISTER = 'KINDLY REGISTER FIRST';
export const AUTHERROR = 'AUTH FAIL';
export const LOGIN = 'SUCCESSFUL LOGIN';
export const LOGINREQUIRED = 'LOGIN REQUIRED';
export const ERROR = 'SERVER ERROR';
export const ERRORTOKEN = 'INVALID TOKEN';
export const TOKEN = 'ACCESS TOKEN';
export const CONFLICT = 'CONFLICT';
export const MISSING = 'REQUIRED ARGUMENT MISSING';
export const CREATED = 'CREATED';
export const DELETED = 'DELETED';
export const INFO = 'INFO';
export const INVALID = 'INVALID DATA IN REQUEST';
export const LOGOUT = 'SUCCESSFUL LOGOUT';
export const UPDATE = 'DATA UPDATED';
export const AVAILABLE = 'DATA UPDATABLE';

export const SERVER_DOWN =
  'Some error occurred, our team is in the process of fixing it!';

// Socket Client Action constants
export const SOCKET_CLIENT_ACTIONS = {
  CLIENT_CONNECTION: 'CLIENT_CONNECTION',
  CLIENT_CREATE_ROOM: 'CLIENT_CREATE_ROOM',
  CLIENT_ROOM_MESSAGE: 'CLIENT_ROOM_MESSAGE',
};

// Socket Server Action constants
export const SOCKET_SERVER_ACTIONS = {
  SERVER_JOIN_ROOM: 'SERVER_JOIN_ROOM',
  SERVER_ROOM_MESSAGE: 'SERVER_ROOM_MESSAGE',
};
