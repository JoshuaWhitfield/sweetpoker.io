import { potIncrease, potReset, potIncrementSplit, roundIterate, playerIterate, roundReset, playerReset, playerCheck, playerFold, playerBet, playerRaise, playerCall, playerAllIn, increaseChips, decreaseChips, setChips, isBankrupt, increaseBalance, decreaseBalance, setBalance } from "../slices/Reducer/reducerSlice";

export const reducer = (state, action) => {
    switch (action.type) {
        case '@pot_increase': 

            break;

        case '@pot_increment_split_value':

            break;

        case '@pot_reset': 

            break;

        case '@round_iterate':

            break;

        case '@player_iterate':

            break;
        
        case '@round_reset':

            break;

        case '@player_reset':

            break;

        case '@player_check':

            break;

        case '@player_fold': 

            break;
        
        case '@player_bet':

            break;
        
        case '@player_raise':

            break;
        
        case '@player_call': 

            break;

        case '@player_all_in':

            break;

        case '@increase_balance':

            break;

        case '@decrease_balance':

            break;
        
        case '@set_balance':

            break;
        
        case '@increase_chips':

            break;

        case '@decrease_chips':

            break;

        case '@set_chips': 

            break;

        case '@toggle_bankrupt':

            break;

        default: return state;
    }
}