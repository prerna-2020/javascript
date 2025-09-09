//Random number Generator between ranges

const maxLimit = 1000;
const minLimit = 10;

console.log(`Random Number with minlimit included maxlimit excluded:: ${Math.floor(Math.random() * (maxLimit-minLimit)) + minLimit}`);


console.log(`Random Number with both limit included:: ${Math.floor(Math.random() * (maxLimit-minLimit+1)) + minLimit}`);