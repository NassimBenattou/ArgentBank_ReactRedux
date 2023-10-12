const initialState = {

    user: null,
};
  
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USER':
        return {
            ...state,
            user: action.payload,
        };
        case 'DELETE_USER':
        return {
            ...state,
            user: null,
        };
        default:
        return state;
    }
};
  
  export default userReducer;