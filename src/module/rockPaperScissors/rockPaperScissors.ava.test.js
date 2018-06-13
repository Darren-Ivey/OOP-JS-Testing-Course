
import test from 'ava'
import { rockPaperScissors } from './rockPaperScissors';

test('rock beat scissors', t => {
    t.is(rockPaperScissors.round('rock', 'scissors') , "player1");
    t.is(rockPaperScissors.round('scissors', 'rock') , "player2");
});

test('paper beat rock', t => {
    t.is(rockPaperScissors.round('paper', 'rock') , "player1");
    t.is(rockPaperScissors.round('rock', 'paper') , "player2");
});

test('scissors beat paper', t => {
    t.is(rockPaperScissors.round('scissors', 'paper') , "player1");
    t.is(rockPaperScissors.round('paper', 'scissors') , "player2");
});

test('draw', t => {
    t.is(rockPaperScissors.round('rock', 'rock') , "draw");
    t.is(rockPaperScissors.round('scissors', 'scissors') , "draw");
    t.is(rockPaperScissors.round('paper', 'paper') , "draw");
});
