const iterate = '@round_iterate';
const reset = '@round_reset';

export const roundIterate = () => {
    return {
        type: iterate,
        payload: 1,
    }
}

export const roundReset = () => {
    return {
        type: reset,
        payload: 0,
    }
}