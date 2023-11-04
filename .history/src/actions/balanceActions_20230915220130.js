const increase_balance = '@increase_balance';
const decrease_balance = '@decrease_balance';
const set_balance = '@set_balance';

export const increaseBalance = (amount) => {
    return {
        type: increase_balance,
        payload: amount,
    }
}