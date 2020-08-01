
import {history} from "../helpers/history";
import {base_accounting_url} from "../_constants/url_constants";
import userConstants from "../_constants/user.constants";
import {alertActions} from "./alert.actions";
import store from "../store/store";

const userActions = {
     login,
     logout,
     register,
    editUser,
    changePass,
    removeUser,
    getProfile,
    changeAvatar
};

function login(email, password) {
    return dispatch => {
        dispatch(request());
        let token = 'Basic ' + btoa(`${email}:${password}`);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
                        'Authorization': token}
        };

        fetch(`${base_accounting_url}/v1/login`, requestOptions)
            .then(response =>  {
                if (!response.ok) {
                    if(response.status == 401) {
                        return Promise.reject("login or/and password are incorrect");
                    }
                }else {
                    let token = response.headers.get("X-Token");
                    dispatch(setToken(token));
                    localStorage.setItem('user', token);
                    return response.json();
                }
            }
            )

            .then(
                user => {
                    dispatch(success(user));
                    console.log(store.getState());
                    history.push('/');
                },
                error => {
                   // dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
            .then(() => dispatch(requestCancel()));
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function request() { return { type: userConstants.REQUEST } }
function requestCancel() { return { type: userConstants.REQUEST_CANCEL } }
function setToken(token) { return {type: userConstants.SET_TOKEN, token}}

function logout() {
     localStorage.removeItem('user');
     return dispatch => {
         dispatch(removeUser());
         dispatch(removeToken());
         history.push('/start');
     }

   function removeUser() { return { type: userConstants.LOGOUT }}
   function removeToken() { return {type: userConstants.DELETE_TOKEN}}

   
 }

function register(user) {
    return dispatch => {
        dispatch(request());

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`${base_accounting_url}/v1/signup`, requestOptions)
            .then(response =>  {
                    if (!response.ok) {
                        if(response.status == 401) {
                            return Promise.reject("User with this email exists");
                        }
                    }else {
                        let token = response.headers.get("X-Token");
                        dispatch(setToken(token));
                        localStorage.setItem('user', token);
                        return response.json();
                    }
                }
            )

            .then(
                user => {
                    dispatch(success(user));
                    console.log(store.getState());
                    history.push('/');
                },
                error => {
                    // dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
            .then(() => dispatch(requestCancel()));
    };


    function success(user) { return { type: userConstants.REGISTER_SUCCESS,user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function getProfile(token) {
    return dispatch => {
        dispatch(request());
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,
                'Authorization': token}
        };

        fetch(`${base_accounting_url}/v1/user`, requestOptions)
            .then(handleResponse)
            .then(
                succesResponse => {
                    dispatch(success(succesResponse.user));
                    dispatch(setToken(succesResponse.XToken));
                    console.log(store.getState());
                    localStorage.setItem('user', succesResponse.XToken);
                    // history.push('/');
                },
                error => {
                    // dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
            .then(() => dispatch(requestCancel()));
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function changeAvatar(file) {

    return dispatch => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ogzwixwl');
        const options = {
            method: 'POST',
            body: formData,
        };
        fetch('https://api.Cloudinary.com/v1_1/dm1iv9zfp/image/upload', options)
            .then(res => res.json())
            .then(res => {
                dispatch(changeAvatarSuccess(res.secure_url))})
            .catch(err => console.log(err));
    }


    function changeAvatarSuccess(avatar) {return {type: userConstants.CHANGE_AVATAR_SUCCESS, avatar}};

}


function editUser(user) {
    return dispatch => {
        dispatch(request());

        let token = store.getState().token;
        console.log("token: " + token );
        console.log(JSON.stringify(user));
        for (let i in user){
            console.log(i + " " + user[i]);
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' ,
                'Authorization': token},
            body: JSON.stringify(user)
        };

        fetch(`${base_accounting_url}/v1/user/edit`, requestOptions)
            .then(response =>  {
                    if (!response.ok) {
                        if(response.status == 401) {
                            return Promise.reject("Unauthorized request (token not valid)");
                        }
                    }else {
                        let token = response.headers.get("X-Token");
                        dispatch(setToken(token));
                        localStorage.setItem('user', token);
                        return response.json();
                    }
                }
            )
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(alertActions.success("Changes saved"));
                },
                error => {
                    dispatch(alertActions.error(error));
                }
            )
            .then(() => dispatch(requestCancel()));
    };

    function success(user) { return { type: userConstants.EDIT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.EDIT_FAILURE, error } }

}

function changePass(newPassword) {
    return dispatch => {
        dispatch(request());

        let token = store.getState().token;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' ,
                'X-Password': newPassword,
                'Authorization': token,
                }
        };

        fetch(`${base_accounting_url}/account/user/password`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    const error = response.message;
                    return Promise.reject(error);
                }
                return response;
            })
            .then(
                response => {
                    let token = 'Basic ' + btoa(`${store.getState().username}:${newPassword}`);
                    dispatch(success(token));
                    dispatch(alertActions.success('Changes saved'));
                    //history.push('/');
                },
                error => {
                    //dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
            .then(() => dispatch(requestCancel()));
    };

    function success(token) { return { type: userConstants.SET_TOKEN, token } }
    // function failure(error) { return { type: userConstants.EDIT_FAILURE, error } }
}

function removeUser() {
    return (dispatch) => {
        dispatch(request());
        let token = store.getState().token;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' ,
                'Authorization': token,
            }
        };
        fetch(`${base_accounting_url}/account/user`,requestOptions)
            .then(handleResponse)
            .then(
                user => {
                    dispatch(logout());
                    history.push('/login');
                    dispatch(alertActions.success('User deleted'));
                    //history.push('/');
                },
                error => {
                    dispatch(alertActions.error(error));
                }
            )
            .then(() => dispatch(requestCancel()));

    }
}

function handleResponse(response) {
    return response.json()
        .then(data => {
            if (!response.ok) {
                if(response.status == 401){
                    return Promise.reject("login or/and password are incorrect");
                }
            }
            console.log(data);
            for (let pair of response.headers.entries()) { // accessing the entries
                console.log(pair[0] + " : " + pair[1]);
                }
            return {user: data,  XToken : response.headers.get("X-Token")};
        });
}

export default userActions;