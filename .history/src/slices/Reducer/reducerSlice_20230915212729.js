export const potIncrease = (state, amount) => {
    return {
        ...state,
        state.pot.value += amount;
    }
}