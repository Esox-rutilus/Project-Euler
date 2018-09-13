// Problem: 
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


// Solution: 

/**
 * Returns the biggest possible palindrome from 3 digit numbers, along with the numbers to get it
 */
const findPalindromeFromThreeDigits = () => {
    let palindrome = {
        i: 0,
        y: 0,
        palin: 0
    };
    for (let i=999; i > 99; i--) {
        for (let y=999; y > 99; y--) {
            let newPalin = i * y;
            if (isPalindrome(newPalin)) {
                if (newPalin > palindrome.palin) {
                    palindrome = {
                        i: i,
                        y: y,
                        palin: newPalin
                    }
                }
            }
        }
    }
    return palindrome;
};

const isPalindrome = number => parseInt(reverseString(number.toString())) === number;


const reverseString = str => str.split('').reverse().toString().replace(/,/g, '');

console.log(findPalindromeFromThreeDigits());