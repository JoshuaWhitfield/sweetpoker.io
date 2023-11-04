const check = '@player_check';
const fold = '@player_fold';
const bet = '@player_bet';
const raise = '@player_raise';
const call = '@player_call';

export const playerCheck = () => {
    return {
        type: check,
        payload: 0,
    }
}

export const playerFold = () => {
    return {
        type: fold,
        payload: 0,
    }
}

export const playerBet = (amount) => {
    return {
        type: bet,
        payload: amount,
    }
}

export const playerRaise = (amount) => {
    return {
        type: raise,
        payload: amount,
    }
}

export const playerCall = (amount) => {
    
}