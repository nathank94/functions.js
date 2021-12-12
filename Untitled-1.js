/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = () => {
  // 
  console.log(Math.max(1, 3));
};

maxOfThree();

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = () => {
  //
   console.log(Math.max(1, 3, 2));
};

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = () => {
  //
        if (str === ('a' || 'i' || 'o' || 'u' || 'e')) {
          return true;
        } else {
          return false;
        }
  }
};

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = () => {
  // ADD YOUR CODE HERE
}; // Set addition
function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
// Print out the total to the console
console.log(sum([1,2,3,4]));


// Set multiplication
function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
// Print out the total to the console
console.log(multiply([1,2,3,4]));

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/let argumentLength = (a, b, c, d) => {
}
console.log(argumentLength.length);

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = () => {
  // function reverse(str) {
    var text = '';
    
    for (var i = str.length - 1; i >= 0; i--) {
    	text += str[i];
    	continue
    }
    return text.toLowerCase();
}
console.log(reverse("jag testar"));
};

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = () => {
  // function longer(champ, contender) {
  return (contender.length > champ.length) ? contender : champ;
}

function longestWord(str) {
  var words = str.split(' ');
  return words.reduce(longer);
}

};

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = () => {
  // function getLongest (arrStr) {
  var longest = 0, word;

  for(var i=0 , len = arrStr.length ; i < len ; i++){

    if(longest < arrStr[i].length) {
       longest = arrStr[i].length;
       word = arrStr[i];
    }

  }

  return word;
}

function isLongest (str) {
  var arrayStr = str.split(' ');
  return function(fn) {
    return fn.apply(this,[arrayStr]);
  }
}

};
