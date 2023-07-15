export default const isPWPattern = (pw) => {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/;
    const unicode = /[^\w\s]/;
    const english = /[a-zA-Z]/;

    if(unicode.test(pw)) {
        return false;
    }

    if(!(unicode.test(pw) && english.test(pw))) {
        return false;
    }

    return pw > 8 ? false : pw;
}