

// Impure function examples

// Output will vary depending on  random number
const impureFunction1 = (num) => {
    return num * Math.random();
};

// Output will vary depending on specific time
const impureFunction2 = () => {
    return moment();
};

// Side effect
const impureFunction3 = () => {
    console.log("Impure!!!")
};
// Mutates a value
const impureFunction4 = (num) => {
    return num = 0;
};

// Pure function
const pureFunction1 = (obj) => {
    return { ...obj, value: "This" };
};