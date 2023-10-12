export const loginUser = (token) => {
    return {
      type: 'LOGIN_USER',
      token: token,
    };
};
  
export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER',
    };
};