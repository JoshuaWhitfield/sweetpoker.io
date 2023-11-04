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

export const playerRaise = (state, amount) => {
    /* send RAISE message to db */
    return {
        ...state,
        playroom: {
            /* reflect RAISE message in 'state.playroom.actions' array */
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            }
        }
    }
}

export const playerCall = (state, amount) => {
    /* send CALL message to db */
    return {
        ...state,
        playroom: {
            /* reflect CALL message in 'state.playroom.actions' array */
            ...state.playroom,
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            }
        }
    }
}

export const playerAllIn = (state, amount) => {
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

export const addPlayerAction = (state, action) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            actions: (actions + [action]),
        }
    }
}

export const resetPlayerAction = (state) => {
    return {
        ...state, 
        playroom: {
            ...state.playroom,
            actions: [],
        }
    }
}


//...


/* make sure the player action functions
update to the database so that every player
can see eachother's actions */
