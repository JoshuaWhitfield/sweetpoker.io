const deal_flop = '@deal_flop';
const deal_turn = '@deal_turn';
const deal_river = '@deal_river';
const deal_pocket = '@deal_pocket';

export const dealFlop = () => {
    return {
        type: deal_flop,
        payload: 3,
    }
}

export const dealTurn = () => {
    return {
        type: deal_turn,
        payload: 3,
    }
}