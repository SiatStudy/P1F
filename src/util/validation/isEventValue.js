export default const isEventValue = (state) => {
    const requiredKeys = ['id', 'eventName', 'eventContent', 'plan', 'end', 'state'];
    const missingKeys = [];

    for (const key of requiredKeys) {
        if (!(key in state)) {
            missingKeys.push(key);
        }
    }

    if (missingKeys.length > 0) {
        throw new Error(`[ERROR] This state is missing the following keys: ${missingKeys.join(', ')}`);
    }

    return state;
}