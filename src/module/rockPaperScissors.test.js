
import test from 'ava'
import { rockPaperScissors, gameResult } from './rockPaperScissors';

test('rock beat scissors', t => {
    const player1Selection = 'rock';
    const player2Selection = 'scissors';
    t.is(rockPaperScissors.game(player1Selection, player2Selection) , "player1");
});

test('paper beat rock', t => {
    const player1Selection = 'paper';
    const player2Selection = 'rock';
    t.is(rockPaperScissors.game(player1Selection, player2Selection) , "player1");
});

test('scissors beat paper', t => {
    const player1Selection = 'scissors';
    const player2Selection = 'paper';
    t.is(rockPaperScissors.game(player1Selection, player2Selection) , "player1");
});

test('draw', t => {
    const player1Selection = 'rock';
    const player2Selection = 'rock';
    t.is(rockPaperScissors.game(player1Selection, player2Selection) , "draw");
});
