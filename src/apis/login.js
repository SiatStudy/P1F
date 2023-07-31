import axios from 'axios'
import errorFunc from '../util/errorFunc'

const login = async ({ url, userData }) => {
    return axios
        .post(url + '/login', userData)
        .then(res => {

        })
        .catch(err => {
            errorFunc(err);
        });
};

const searchUserData = async ({ url, userData, mode }) => {
    return mode === "id"
        ? axios
            .post(url + "/id", userData)
            .then(res => {


            })
            .catch(err => {
                errorFunc(err);
            })
        : axios
            .post(url + "/password", userData)
            .then(res => {


            })
            .catch(err => {
                errorFunc(err);
            });
};

const signup = async ({ url, userData, mode }) => {
    return mode === "duple"
        ? axios
            .post(url + '/duple', userData)
            .then(res => {


            })
            .catch(err => {
                errorFunc(err);
            })
        : axios
            .post(ulr + '')
}

export { login, searchUserData };