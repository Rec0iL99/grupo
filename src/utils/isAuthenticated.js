// Functions that checks if the client has a accessToken or not
const isAuthenticated = () => {
  if (localStorage.token) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
