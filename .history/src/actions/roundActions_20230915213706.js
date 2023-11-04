const round_iterate = '@round_iterate';
const player_iterate = '@player_iterate';
const reset = '@round_reset';

export const roundIterate = () => {
    return {
        type: round_iterate,
        payload: 1,
    }
}

export const playerIterate = () => {
    return {
        type: player_iterate,
        payload: 1,
    }
}

export const roundReset = () => {
    return {
        type: reset,
        payload: 0,
    }
}