export const state = {
    actions: [],
    pot: {
        value: 0,
        splitValue: 0,
    },
    round: {
        iteratePlayerBy: 4, //number of players to iterate through per round --> 5 players
        iterateRoundBy: 3, // preflop, flop, turn, river --> 4 iterations
        currentRound: 0,
        currentPlayer: 0,
    }
}