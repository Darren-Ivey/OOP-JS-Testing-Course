
const rockPaperScissors = require('./rockPaperScissors').rockPaperScissors;

test('rock beat scissors', () => {
    expect(rockPaperScissors.game('rock', 'scissors')).toBe("player1");
    expect(rockPaperScissors.game('scissors', 'rock')).toBe("player2");
});

test('paper beat rock', () => {
    expect(rockPaperScissors.game('paper', 'rock')).toBe("player1");
    expect(rockPaperScissors.game('rock', 'paper')).toBe("player2");
});

test('scissors beat paper', () => {
    expect(rockPaperScissors.game('scissors', 'paper')).toBe("player1");
    expect(rockPaperScissors.game('paper', 'scissors')).toBe("player2");
});

test('draw', () => {
    expect(rockPaperScissors.game('rock', 'rock')).toBe("draw");
    expect(rockPaperScissors.game('scissors', 'scissors')).toBe("draw");
    expect(rockPaperScissors.game('paper', 'paper')).toBe("draw");
});

test('Player1 wins after 3 games', () => {
   const playerOneScore = [0,1,1];
   const playerTwoScore = [1,0,0];

   expect(rockPaperScissors.gameResult(playerOneScore,playerTwoScore)).toBe("player1 wins the game!");
});

test('Player2 wins after 3 games', () => {
    const playerOneScore = [0,1,0];
    const playerTwoScore = [1,0,1];

    expect(rockPaperScissors.gameResult(playerOneScore,playerTwoScore)).toBe("player2 wins the game!");
});


test('The game is a draw after 3 games', () => {
    const playerOneScore = [0,0,1];
    const playerTwoScore = [1,0,0];

    expect(rockPaperScissors.gameResult(playerOneScore,playerTwoScore)).toBe("the game is a draw");
});
