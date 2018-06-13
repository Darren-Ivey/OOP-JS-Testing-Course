const itParam = require('mocha-param');
const expect = require('chai').expect;
const rockPaperScissors = require('./rockPaperScissors').rockPaperScissors;

describe('Rock blunts Scissors:', () => {

    it('player one should win if he plays Rock against Scissors', () => {
        expect(rockPaperScissors.round('rock', 'scissors')).to.equal('player1');
    });

    it('player two should win if he plays Rock against Scissors', () => {
        expect(rockPaperScissors.round('scissors', 'rock')).to.equal('player2');
    })

});

describe('Scissors cuts Paper:', () => {

    it('player one should win if he plays Scissors against Paper', () => {
        expect(rockPaperScissors.round('scissors', 'paper')).to.equal('player1');
    });

    it('player two should win if he plays rock against scissors', () => {
        expect(rockPaperScissors.round('paper', 'scissors')).to.equal('player2');
    })

});

describe('Paper wraps Stone:', () => {

    it('player one should win if he plays Paper against Rock', () => {
        expect(rockPaperScissors.round('paper', 'rock')).to.equal('player1');
    });

    it('player two should win if he plays Paper against Rock', () => {
        expect(rockPaperScissors.round('rock', 'paper')).to.equal('player2');
    })

});

describe('It should be a draw if both players play the same thing', () => {

    const games = [{ playerOne: 'rock', playerTwo: 'rock' }, { playerOne: 'paper', playerTwo: 'paper' }, { playerOne: 'scissors', playerTwo: 'scissors' }];

    itParam("if player one plays ${value.playerOne} and player two plays ${value.playerTwo} it's a draw", games, ({playerOne, playerTwo}) => {
        expect(rockPaperScissors.round(playerOne, playerTwo)).to.equal('draw')
    })
});
