import axios from 'axios'
import { useDispatch } from "react-redux";

import errorFunc from '../util/errorFunc'
import { userLogin, userEmailReturn } from '../store/userLogin'

const login = async ({ url, userData, mode }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    if (mode === "login") {
        axios.post(url + '/login', userData)
            .then(res => {
                if (res.data.message) {
                    dispatch(userLogin(res.data.message.result.sectionId));
                    return dispatch(userEmailReturn());
                } else {
                    return 400;
                }
            })
            .catch(err => {
                errorFunc('loginAxios', err);
            });
    } else if (mode=== "duple") {
        axios.post(url + '/duple', userData)
            .then(res => {
                return res.data.isDuplicated;
            })
            .catch(err => {
                errorFunc('dupleAxios', err)
            })
    }
};

const searchUserData = async ({ url, userData, mode }) => {
    if(mode === "id") {
        axios.post(url + "/id", userData)
            .then(res => {
                if (res.data.exists) {
                    return res.data.id;
                } else {
                    return false;
                }
            })
        .catch(err => {
            errorFunc('searchIDAxios', err);
        })
    } else if(mode === "pw") {
        axios
            .post(url + "/password", userData)
            .then(res => {
                if(res.data.passwordData) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(err => {
                errorFunc('searchPWAxios', err);
            });
    } else {
        errorFunc('searchUserAxios', 'wrong mode String');
    }
};

const signup = async ({ url, userData, mode }) => {
    if(mode === "signup") {
        axios.post(url + '/signup', userData)
            .then(res => {
                if (res.data.registration) {
                    return false;
                }
            })
            .catch(err => {
                errorFunc('signupAxios', err);
            });
    } else if (mode === "info") {
        axios
            .patch(url + '/info', userData)
            .then(res => {
                return res.data.updateStatus;
            })
            .catch(err => {
                errorFunc('infoAxios', err);
            });
    } else {
        errorFunc('signupAxios', 'wrong mode String');
    }
};

const todoData = async ({ url, userData, mode }) => {
    if(mode === "general") {
        axios.get(url , userData)
            .then(res => {
                if(res.data.success) {
                    //TODO : indexedDB input
                } else {
                    return false;
                }
            })
            .catch(err => {
                errorFunc('todoGetAxios', err);
            });
    } else if (mode === "remove") {
        axios.patch(url + '/item' , userData)
            .then(res => {
                return res.data.success;
            })
            .catch(err => {
                errorFunc('todoPatchAxios', err);
            });
    } else if(mode === "add") {
        axios.post(url + '/item', userData)
            .then(res => {
                return res.data.createStatus;
            })
            .catch(err => {
                errorFunc('todoPostAxios', err);
            });
    } else if (mode === 'delete') {
        axios.delete(url + '/item', userData)
            .then(res => {
                return res.data.deleteStatus;
            })
            .catch(err => {
                errorFunc('todoDeleteAxios', err);
            });
    } else {
        errorFunc('todoAxios', 'wrong mode String');
    }
}

export default { login, searchUserData, signup, todoData };