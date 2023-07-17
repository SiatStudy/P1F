const isPWPattern = (pw) => {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/;
    const unicode = /[^\w]/;
    const english = /[a-zA-Z]/;

    if(korean.test(pw) && /[/s]/.test(pw)) {
        return false;
    }

    if(!(unicode.test(pw) && english.test(pw))) {
        return false;
    }

    return pw.length > 8 ? false : pw;
}

export { isPWPattern };