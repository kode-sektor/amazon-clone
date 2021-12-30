import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: '',
    formMsg : ''
};

const reducedFunction = (state = initState, action) => {

    switch (action.type) {
        case authConstants.LOGIN_REQUEST :
            state = {
                ...state,
                authenticating: true
            }
        break;
        default : 
            state = initState
    }
    return state;
}

export default reducedFunction;
