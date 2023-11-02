const initialState = {

    user: {
        userName: '',
        firstName: '',
        id: ''
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
                id: action.payload.id
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