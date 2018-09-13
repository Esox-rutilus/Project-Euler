// Problem:
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Solution:
const findSmallestDivisableNumber = () => {
    let num = 1;
    while(true) {
        if (isDivisable(num, 20)) {
            return num;
        }
        num++;
    }
};
const isDivisable = (num, cap) => {
    for(let i=2; i<=cap; i++) {
        if (num % i !== 0) {
            return false;
        }
    }
    return true;
};
console.log(findSmallestDivisableNumber());