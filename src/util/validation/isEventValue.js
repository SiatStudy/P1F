const isEventValue = (state) => {
    const requiredKeys = ['id', 'eventName', 'eventContent', 'plan', 'end', 'state'];
    const requiredPlanElements = ['date', 'time'];
    const requiredEventElements = ['from', 'to'];
    const requiredEndElements = ['date', 'time'];

    const missingKeys = [];

    // Check for missing required keys in the main state object
    for (const key of requiredKeys) {
        if (!(key in state)) {
            missingKeys.push(key);
        }
    }

    // Check for missing keys in the 'plan' object
    if (!state.plan || typeof state.plan !== 'object') {
        missingKeys.push('plan');
    } else {
        for (const key of requiredPlanElements) {
            if (!(key in state.plan)) {
                missingKeys.push(`[plan] >> ${key}`);
            }
        }

        // Check for missing keys in the 'date' and 'time' objects
        if (!state.plan.date || typeof state.plan.date !== 'object') {
            missingKeys.push('[plan] >> date');
        } else {
            for (const key of requiredEventElements) {
                if (!(key in state.plan.date)) {
                    missingKeys.push(`[plan.date] >> ${key}`);
                }
            }
        }

        if (!state.plan.time || typeof state.plan.time !== 'object') {
            missingKeys.push('[plan] >> time');
        } else {
            for (const key of requiredEventElements) {
                if (!(key in state.plan.time)) {
                    missingKeys.push(`[plan.time] >> ${key}`);
                }
            }
        }
    }

    // Check for missing keys in the 'end' object
    if (!state.end || typeof state.end !== 'object') {
        missingKeys.push('end');
    } else {
        for (const key of requiredEndElements) {
            if (!(key in state.end)) {
                missingKeys.push(`[end] >> ${key}`);
            }
        }
    }

    if(!state.state || typeof state.state !== 'boolean') {
        missingKeys.push('state');
    }

    if (missingKeys.length > 0) {
        throw new Error(`[ERROR] This state is missing the following keys: ${missingKeys.join(', ')}`);
    }

    return state;
};

export { isEventValue };