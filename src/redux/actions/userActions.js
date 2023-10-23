export const getUser = (userData) => {
    return {
      type: 'GET_USER',
      payload: userData,
    };
};
  
export const deleteUser = () => {
    return {
        type: 'DELETE_USER',
    };
};