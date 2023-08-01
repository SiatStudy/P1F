const errorFunc = (locate, data) => {
    throw new Error(`[${locate} ERROR] ` + data);
};
export default errorFunc;