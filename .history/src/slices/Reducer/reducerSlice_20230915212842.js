export const potIncrease = (state, amount) => {
    return {
        ...state,
        pot: {
            ...state.pot,
            value: state.pot.value + amount,
        }
    }
}