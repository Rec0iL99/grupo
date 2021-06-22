// Function that checks if the client has a accessToken or not
const isAuthenticated = () => {
  if (localStorage.token) {
    return true;
  }
  return false;
};

export default isAuthenticated;
