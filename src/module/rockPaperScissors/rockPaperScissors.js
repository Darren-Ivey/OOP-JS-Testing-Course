
const rockPaperScissors = class {

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
