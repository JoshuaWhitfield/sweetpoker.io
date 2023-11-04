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
            return ;

        case '@player_check':
            return ;

        case '@player_fold': 
            return ;
        
        case '@player_bet':
            return ;
        
        case '@player_raise':
            return ;
        
        case '@player_call': 
            return ;

        case '@player_all_in':
            return ;

        case '@increase_balance':
            return ;

        case '@decrease_balance':
            return ;
        
        case '@set_balance':
            return ;
        
        case '@increase_chips':
            return ;

        case '@decrease_chips':
            return ;

        case '@set_chips': 
            return ;

        case '@toggle_bankrupt':
            return ;
        
        case '@add_action':
            return ;

        case '@reset_action':
            return ;

        case '@player_is_active':
            return playerIsActive(state, action.payload)

        default: return state;
    }
}