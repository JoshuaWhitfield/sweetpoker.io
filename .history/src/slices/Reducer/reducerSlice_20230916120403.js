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
            },
            player_is_active: true,
            player_is_all_in: false,
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

export const playerCheck = (state) => {
    /* send CHECK message to db */
    return {
        ...state,
        playroom: {
            /* reflect CHECK message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            }
        }
    }
}

export const playerFold = (state, amount) => {
    /* send FOLD message to db */
    return {
        ...state,
        playroom: {
            /* reflect FOLD message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            player_is_active: false,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const playerBet = (state, amount) => {
    /* send BET message to db */
    return {
        ...state,
        playroom: {
            /* reflect BET message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
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
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
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
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const playerAllIn = (state, amount) => {
    /* send ALL-IN message to db */
    return {
        ...state,
        playroom: {
            /* reflect ALL-IN message in 'state.playroom.actions' array */
            ...state.playroom,
            round: {
                ...state.playroom.round,
                currentPlayer: (state.playroom.round.currentPlayer + 1),
            },
            player_is_all_in: true,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            },
            pot: {
                ...state.playroom.pot,
                value: (state.playroom.pot.value + amount),
            },
        }
    }
}

export const increaseChips = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value + amount),
            }
        }
    }
}

export const decreaseChips = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                value: (state.playroom.chips.value - amount),
            }
        }
    }
}

export const setChips = (state, amount) => {
    return {
        ...state,
        playroom: {
            ...state.playroom,
            chips: {
                ...state.playroom.chips,
                value: amount,
            }
        }
    }
}



//...


/* make sure the player action functions
update to the database so that every player
can see eachother's actions */
