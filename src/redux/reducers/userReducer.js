const initialState = {

    user: {
        userName: '',
        firstName: '',
    },
};
  
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USER':
        return {
            ...state,
            user: {
                ...state.user,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
            },
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