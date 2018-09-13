//Problem: 
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


//Solution:
const primeFactor = (num, factor = 2) => {
    if (num % factor === 0) {
        num = num / factor;
        if (!isPrime(num)) {
            return primeFactor(num);
        }
        else {
            return num;
        }
    }
    else{
        return primeFactor(num, nextPrime(factor));
    }
};
const isPrime = val => {
    for (let i=2; i*i<= val; i++) {
        if (val %   i === 0 && i != val) {
            return false;
        }
    }
    return true;
};
const nextPrime = value => {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
};
console.log(primeFactor(600851475143));