const initialState = {

    token: null,
};
  
const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_USER':
        return {
            ...state,
            token: action.token,
        };
        case 'LOGOUT_USER':
        return {
            ...state,
            token: null,
        };
        default:
        return state;
    }
};
  
  export default loginReducer;