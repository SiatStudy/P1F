export default const isNumber = (val) => {
    if(val instanceof Number) {
        return val;
    }
    throw new TypeError;
}