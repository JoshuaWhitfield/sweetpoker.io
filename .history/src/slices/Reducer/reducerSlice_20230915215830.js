export const potIncrease = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            }
        }
    }
}

export const potIncrementSplit = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                splitValue: (state.playroom.pot.splitValue + amount),
            }
        }
    }
}

export const potReset = (state) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                value: 0,
            }
        }
    }
}

export const roundIterate = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentRound: (state.playroom.round.currentRound + amount),
            }
        }
    }
}

export const playerIterate = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + amount),
            }
        }
    }
}

export const roundReset = (state) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentRound: 0,
            }
        }
    }
}

export const playerReset = (state) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: 0,
            }
        }
    }
}

export const playerCheck = (state) => {
    return playerIterate(state, 1)
}

export const playerFold = (state) => {
    return playerIterate(state, 1)
}

export const playerBet = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            pot: {
                ...state.pot,
                value: (state.playroom.pot.value + amount),
            }
        }
    }
}

export const 