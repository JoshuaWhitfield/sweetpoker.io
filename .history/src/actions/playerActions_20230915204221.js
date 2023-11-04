const check = '@player_check';
const fold = '@player_fold';
const bet = '@player_bet';
const raise = '@player_raise';
const call = '@player_call';

export const playerCheck = () => {
    return {
        type: check,
    }
}