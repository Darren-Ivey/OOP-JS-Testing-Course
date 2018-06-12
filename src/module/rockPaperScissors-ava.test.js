
import test from 'ava'
import { rockPaperScissors } from './rockPaperScissors';

test('rock beat scissors', t => {
    t.is(rockPaperScissors.game('rock', 'scissors') , "player1");
    t.is(rockPaperScissors.game('scissors', 'rock') , "player2");
});

test('paper beat rock', t => {
    t.is(rockPaperScissors.game('paper', 'rock') , "player1");
    t.is(rockPaperScissors.game('rock', 'paper') , "player2");
});

test('scissors beat paper', t => {
    t.is(rockPaperScissors.game('scissors', 'paper') , "player1");
    t.is(rockPaperScissors.game('paper', 'scissors') , "player2");
});

test('draw', t => {
    t.is(rockPaperScissors.game('rock', 'rock') , "draw");
});
