
const fibonacciCalculator = class {
    static calculate (index) {
        return ( index > 1 )  ? this.calculate(index -1) + this.calculate(index - 2) : index;
    }
};

module.exports =  { fibonacciCalculator };
