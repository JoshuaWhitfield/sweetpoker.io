export const state = {
    balance: {
        value: 0,
    },
    playroom: {
        chips: {
            value: 0,
            is_bankrupt: 0,
            auto_rebuy: 0,
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