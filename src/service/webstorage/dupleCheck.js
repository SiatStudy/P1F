import errorFunc from "../../util/errorFunc";

const dupleCheck = (key, data) => {
    const dupleData = sessionStorage.getItem(key);

    if (dupleData === data) {
        return false;
    } else if (dupleData !== data) {
        sessionStorage.setItem(key, data);
        return true;
    } else {
        errorFunc('depleCheck', 'fail to get sessionData');
    }
};

export default { dupleCheck };