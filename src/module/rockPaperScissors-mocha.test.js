const itParam = require('mocha-param');
const expect = require('npm i chai').expect;
import { rockPaperScissors } from './rockPaperScissors';

describe('Rock blunts Scissors:', () => {

    it('player one should win if he plays Rock against Scissors', () => {
        expect(new rockPaperScissors.game('rock', 'scissors')).to.equal('player1');
    })

    it('player two should win if he plays Rock against Scissors', () => {
        expect(new rockPaperScissors.game('scissors', 'rock')).to.equal('player2');
    })

});

describe('Scissors cuts Paper:', () => {

    it('player one should win if he plays Scissors against Paper', () => {
        expect(new rockPaperScissors.game('scissors', 'paper')).to.equal('player1');
    })

    it('player two should win if he plays rock against scissors', () => {
        expect(new rockPaperScissors.game('paper', 'scissors')).to.equal('player2');
    })

});

describe('Paper wraps Stone:', () => {

    it('player one should win if he plays Paper against Rock', () => {
        expect(new rockPaperScissors.game('paper', 'rock')).to.equal('player1');
    })

    it('player two should win if he plays Paper against Rock', () => {
        expect(new rockPaperScissors.game('rock', 'paper')).to.equal('player2');
    })

});

describe('It should be a draw if both players play the same thing', () => {

    const games = [{ playerOne: 'rock', playerTwo: 'rock' }, { playerOne: 'paper', playerTwo: 'paper' }, { playerOne: 'scissors', playerTwo: 'scissors' }];

    itParam("if player one plays ${value.playerOne} and player two plays ${value.playerTwo} it's a draw", games, ({playerOne, playerTwo}) => {
        expect(new rockPaperScissors.game(playerOne, playerTwo)).to.equal('draw')
    })
});
