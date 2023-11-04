import { potIncrease, potReset, potIncrementSplit, roundIterate, playerIterate, roundReset, playerReset, playerCheck, playerFold, playerBet, playerRaise, playerCall, playerAllIn, increaseChips, decreaseChips, setChips, isBankrupt, increaseBalance, decreaseBalance, setBalance, addPlayerAction, resetPlayerAction, playerIsActive } from "../slices/Reducer/reducerSlice";

export const reducer = (state, action) => {
    switch (action.type) {
        case '@pot_increase': 
            return ;

        case '@pot_increment_split_value':
            return ;

        case '@pot_reset': 
            return ;

        case '@round_iterate':
            return ;

        case '@player_iterate':
            return ;
        
        case '@round_reset':
            return ;

        case '@player_reset':
            return playerReset(state, action.payload);

        case '@player_check':
            return playerCheck(state, action.payload);

        case '@player_fold': 
            return playerFold(state, action.payload);
        
        case '@player_bet':
            return playerBet(state, action.payload);
        
        case '@player_raise':
            return playerRaise(state, action.payload);
        
        case '@player_call': 
            return playerCall(state, action.payload);

        case '@player_all_in':
            return playerAllIn(state, action.payload);

        case '@increase_balance':
            return increaseBalance(state, action.payload);

        case '@decrease_balance':
            return decreaseBalance(state, action.payload);
        
        case '@set_balance':
            return setBalance(state, action.payload);
        
        case '@increase_chips':
            return increaseChips(state, action.payload);

        case '@decrease_chips':
            return decreaseChips(state, action.payload);

        case '@set_chips': 
            return setChips(state, action.payload);

        case '@toggle_bankrupt':
            return isBankrupt(state, action.payload);
        
        case '@add_action':
            return addPlayerAction(state, action.payload);

        case '@reset_action':
            return resetPlayerAction(state);

        case '@player_is_active':
            return playerIsActive(state, action.payload);

        default: return state;
    }
}