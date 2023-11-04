export const Officialstate = {
    account: {
        username: '\0',
        decal: '',
        logged_in: false,
    },
    balance: {
        value: 0,
    },
    playroom: {
        player_is_active: true,
        player_is_all_in: false,
        chips: {
            value: 0,
            is_bankrupt: false,
            auto_rebuy: {
                bool: false, //0 = never, 1 = top-up
                amount: 0,
                type: {
                    falls_below: false,
                    falls_to_zero: true, 
                    /* is automatically set to 
                    fall_to_zero, when 
                    auto-rebuy bool is true. */
                }
            }
        },
        round: {
            iteratePlayerBy: 4, //number of players to iterate through per round --> 5 players
            iterateRoundBy: 3, // preflop, flop, turn, river --> 4 iterations
            
            currentPlayer: 0,
            currentRound: 0,
        },
        actions: [],
        pot: {
            value: 0,
            splitValue: 0,
        },
    }
}