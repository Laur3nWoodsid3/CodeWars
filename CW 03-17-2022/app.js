// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let lower = x.toLowerCase();
    let result = x.split('').reverse().join('').toLowerCase();
    return result === lower;
  }