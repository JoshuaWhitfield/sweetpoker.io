export const potIncrease = (state, amount) => {
    return {
        ...state,
        pot: {
            ...state.pot,
            value: (state.pot.value + amount),
        }
    }
}

export const potIncrementSplit = (state, amount) => {
    return {
        ...state,
        pot: {
            ...state.pot,
            splitValue: (state.pot.splitValue + amount),
        }
    }
}

export const potReset = (state) => {
    return {
        ...state,
        pot: {
            ...state.pot,
            value: 0,
        }
    }
}

export const roundIterate = (state, amount) => {
    return {
        ...state,
        round: {
            ...state.round,
            currentRound: (state.round.currentRound + amount),
        }
    }
}

export const playerIterate = (state, amount) => {
    return {
        ...state,
        round: {
            ...state.round,
            currentPlayer: (state.round.currentPlayer + amount),
        }
    }
}

export const roundReset = (state) => {
    return {
        ...state, 
        round: {
            ...state.round,
            currentRound: 0,
        }
    }
}

export const playerReset = (state) => {
    return {
        ...state,
        round: {
            ...state.round,
            currentPlayer: 0,
        }
    }
}