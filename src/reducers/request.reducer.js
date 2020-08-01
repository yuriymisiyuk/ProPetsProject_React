import userConstants from "../_constants/user.constants";

export default function request(state = false, action) {
    switch (action.type) {
        case userConstants.REQUEST:
            return  true;
        case userConstants.REQUEST_CANCEL:
            return false;

        default:
            return state
    }
}