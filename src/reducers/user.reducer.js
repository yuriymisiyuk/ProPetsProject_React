import userConstants from "../_constants/user.constants";

export default function user(state = {}, action) {
    switch (action.type) {

        case userConstants.LOGIN_SUCCESS:
        case userConstants.REGISTER_SUCCESS:
            return  action.user;
        case userConstants.LOGIN_FAILURE:
        case userConstants.REGISTER_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};

        case userConstants.CHANGE_AVATAR_SUCCESS:
            return {...state, avatar: action.avatar}
        case userConstants.EDIT_SUCCESS:
            return action.user;
        case userConstants.EDIT_FAILURE:
            return state;
        default:
            return state;
    }
}