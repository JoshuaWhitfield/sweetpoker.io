const pot_inc = '@pot_increase'

export const potIncrease = (amount) => {
    return {
        type: pot_inc,
        payload: amount,
    }
}