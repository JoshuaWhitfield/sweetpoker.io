const pot_inc = '@pot_increase'
const pot_reset = '@pot_reset'

export const potIncrease = (amount) => {
    return {
        type: pot_inc,
        payload: amount,
    }
}

export potReset = () => {
    return {
        type: pot_reset,
        payload: 0,
    }
}