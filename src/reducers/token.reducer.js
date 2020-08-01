import userConstants from "../_constants/user.constants";


export default function token(state = '', action) {
    switch (action.type) {

        case  userConstants.SET_TOKEN:
            return action.token;
        case userConstants.DELETE_TOKEN:
            return '';
        default:
            return state
    }
}