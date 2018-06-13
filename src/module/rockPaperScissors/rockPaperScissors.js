
const rockPaperScissors = class {

    static gameResult (score1, score2) {

        const numberOfWins = (score) => score.reduce((a, b) =>  a + b);
        const player1Score = numberOfWins(score1);
        const player2Score = numberOfWins(score2);

        if (score1.length === 3) {
            if (player1Score !== player2Score) {
                return player1Score > player2Score ? "player1" : "player2";
            }
            return "draw"
        }
    }

    static game (player1Selection, player2Selection) {
        const weakness = {
            'rock': 'paper',
            'paper': 'scissors',
            'scissors': 'rock'
        };

        if (player1Selection === player2Selection) return 'draw';
        if (weakness[player1Selection] !== player2Selection) return 'player1';
        return 'player2'
    }

};

module.exports =  { rockPaperScissors };
