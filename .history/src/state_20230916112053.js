export const state = {
    balance: {
        value: 0,
    },
    playroom: {
        chips: {
            value: 0,
            is_bankrupt: 0,
            auto_rebuy: {
                bool: 0, //0 = never, 1 = top-up
                amount: 0,
                type: {
                    falls_below: 0,
                    falls_to_zero: 1, 
                    /* is automatically set to 
                    fall to zero, when 
                    auto-rebuy bool is 1. */
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