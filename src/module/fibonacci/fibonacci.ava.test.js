import test from 'ava';
import { fibonacciCalculator } from './fibonacci';

const fibonacciSequence = [ 0, 1, 1, 2, 3, 5, 8 ];

test('third number is one', t => {
    const index = 2;
    t.is(fibonacciCalculator.calculate(index) , fibonacciSequence[index]);
});