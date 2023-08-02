import axios from 'axios';
import { useDispatch } from "react-redux";

import errorFunc from '../util/errorFunc';
import { userLogin, userEmailReturn } from '../store/userLogin';

/**
 * 로그인 또는 중복 확인을 위한 함수
 * @param {Object} options - 함수에 필요한 옵션 객체
 * @param {string} options.url - 서버 URL
 * @param {Object} options.userData - 사용자 데이터
 * @param {string} options.mode - 실행 모드 ("login" 또는 "duple")
 * @returns {Promise} Promise 객체를 반환하며, 로그인 성공 시 사용자 이메일을, 중복 확인 시 true를 반환합니다.
 */

const login = async ({ url, userData, mode }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    // 로그인 기능을 담당하는 함수
    if (mode === "login") {
        axios.post(url + '/login', userData)
            .then(res => {
                if (res.data.message) {
                    // 로그인이 성공적으로 이루어졌을 때, Redux 액션을 사용하여 유저 정보 업데이트
                    dispatch(userLogin(res.data.message.result.sectionId));
                    // 로그인된 유저의 이메일 정보를 리덕스로 반환
                    return dispatch(userEmailReturn());
                } else {
                    // 로그인 실패 시 400 반환
                    return 400;
                }
            })
            .catch(err => {
                // 에러 핸들링을 위해 errorFunc 유틸리티 사용
                errorFunc('loginAxios', err);
            });
    } else if (mode === "duple") {
        // 중복 데이터 확인 기능을 담당하는 함수
        axios.post(url + '/duple', userData)
            .then(res => {
                // 중복 데이터가 있을 경우 true 반환, 없을 경우 false 반환
                return !!res.data.isDuplicated;
            })
            .catch(err => {
                // 에러 핸들링을 위해 errorFunc 유틸리티 사용
                errorFunc('dupleAxios', err)
            })
    }
};

/**
 * 사용자 정보 검색 함수
 * @param {Object} options - 함수에 필요한 옵션 객체
 * @param {string} options.url - 서버 URL
 * @param {Object} options.userData - 사용자 데이터
 * @param {string} options.mode - 검색 모드 ("id" 또는 "pw")
 * @returns {Promise} Promise 객체를 반환하며, 아이디 검색 시 아이디를, 비밀번호 검색 시 true를 반환합니다.
 */

const searchUserData = async ({ url, userData, mode }) => {
    // 유저 데이터 검색을 담당하는 함수 (아이디 또는 비밀번호로 검색)
    if (mode === "id") {
        // 아이디로 검색
        axios.post(url + "/id", userData)
            .then(res => {
                if (res.data.exists) {
                    // 아이디가 존재하면 해당 아이디 반환, 없으면 false 반환
                    return res.data.id;
                } else {
                    return false;
                }
            })
            .catch(err => {
                // 에러 핸들링을 위해 errorFunc 유틸리티 사용
                errorFunc('searchIDAxios', err);
            })
    } else if (mode === "pw") {
        // 비밀번호로 검색
        axios
            .post(url + "/password", userData)
            .then(res => {
                // 비밀번호 데이터가 존재하면 true 반환, 없으면 false 반환
                return !!res.data.passwordData;
            })
            .catch(err => {
                // 에러 핸들링을 위해 errorFunc 유틸리티 사용
                errorFunc('searchPWAxios', err);
            });
    } else {
        // 잘못된 모드 문자열 처리
        errorFunc('searchUserAxios', 'wrong mode String');
    }
};

/**
 * 회원 가입 또는 사용자 정보 업데이트 함수
 * @param {Object} options - 함수에 필요한 옵션 객체
 * @param {string} options.url - 서버 URL
 * @param {Object} options.userData - 사용자 데이터
 * @param {string} options.mode - 실행 모드 ("signup" 또는 "info")
 * @returns {Promise} Promise 객체를 반환하며, 회원 가입 성공 시 true를 반환합니다.
 */

const signup = async ({ url, userData, mode }) => {
    // 회원가입 또는 유저 정보 업데이트를 담당하는 함수
    if (mode === "signup") {
        // 회원가입
        axios.post(url + '/signup', userData)
            .then(res => {
                if (res.data.registration) {
                    // 회원가입이 실패하면 false 반환
                    return false;
                }
            })
            .catch(err => {
                // 에러 핸들링을 위해 errorFunc 유틸리티 사용
                errorFunc('signupAxios', err);
            });
    } else if (mode === "info") {
        // 유저 정보 업데이트
        axios
            .patch(url + '/info', userData)
            .then(res => {
                // 정보 업데이트가 성공하면 true 반환, 실패하면 false 반환
                return !!res.data.updateStatus;
            })
            .catch(err => {
                // 에러 핸들링을 위해 errorFunc 유틸리티 사용
                errorFunc('infoAxios', err);
            });
    } else {
        // 잘못된 모드 문자열 처리
        errorFunc('signupAxios', 'wrong mode String');
    }
};

/**
 * Todo 데이터 조작 함수
 * @param {Object} options - 함수에 필요한 옵션 객체
 * @param {string} options.url - 서버 URL
 * @param {Object} options.userData - Todo 데이터
 * @param {string} options.mode - 실행 모드 ("general", "remove", "add", "delete")
 * @returns {Promise} Promise 객체를 반환하며, 조회 또는 성공 시 해당 결과를 반환합니다.
 */

const todoData = async ({ url, userData, mode }) => {
    // Todo 데이터 조작을 담당하는 함수
    if (mode === "general") {
        // Todo 데이터 조회
        try {
            const response = await axios.get(url, userData);
            if (response.data.success) {
                // 조회된 데이터를 반환
                return response.data.content;
            } else {
                // 데이터 조회 실패 시 false 반환
                return false;
            }
        } catch (error) {
            // 에러 핸들링을 위해 errorFunc 유틸리티 사용
            errorFunc('todoGetAxios', error);
        }
    } else if (mode === "remove") {
        // Todo 아이템 삭제
        try {
            const response = await axios.patch(url + '/item', userData);
            // 삭제 성공 시 true 반환, 실패 시 false 반환
            return !!response.data.success;
        } catch (error) {
            // 에러 핸들링을 위해 errorFunc 유틸리티 사용
            errorFunc('todoPatchAxios', error);
        }
    } else if (mode === "add") {
        // Todo 아이템 추가
        try {
            const response = await axios.post(url + '/item', userData);
            // 추가 성공 시 true 반환, 실패 시 false 반환
            return !!response.data.createStatus;
        } catch (error) {
            // 에러 핸들링을 위해 errorFunc 유틸리티 사용
            errorFunc('todoPostAxios', error);
        }
    } else if (mode === 'delete') {
        // Todo 데이터 삭제
        try {
            const response = await axios.delete(url + '/item', userData);
            // 삭제 성공 시 true 반환, 실패 시 false 반환
            return !!response.data.deleteStatus;
        } catch (error) {
            // 에러 핸들링을 위해 errorFunc 유틸리티 사용
            errorFunc('todoDeleteAxios', error);
        }
    } else {
        // 잘못된 모드 문자열 처리
        errorFunc('todoAxios', 'wrong mode String');
    }
};

export default { login, searchUserData, signup, todoData };