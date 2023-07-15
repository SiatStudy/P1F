export default const isString = (val) => {
    if(val instanceof String) {
        return val;
    }
    throw new TypeError;
}