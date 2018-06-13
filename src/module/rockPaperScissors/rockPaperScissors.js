
const rockPaperScissors = class {

    static numberOfWins (score) {
        return score.reduce((a, b) =>  a + b);
    }

    static gameResult (score1, score2) {
        const player1Score = this.numberOfWins(score1);
        const player2Score = this.numberOfWins(score2);

        if (score1.length === 3) {
            if (player1Score !== player2Score) {
                return player1Score > player2Score ? "player1 wins the game!" : "player2 wins the game!";
            }
            return "the game is a draw"
        }
    }

    static round (player1Selection, player2Selection) {
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
