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