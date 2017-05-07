// 1. Reverse

var string = prompt("Enter a word to be written backwards", "Type your word here");

function reverse(string) {
  var i = string.length - 1;
  var reversedString = "";

  while (i >= 0) {
    reversedString = reversedString + string.charAt(i);
    i--;
  }
  return reversedString;
}

reverse(string);


// 2. Factorial // n! = n × (n-1)!

function factorial(n) {
  if (n === 0) {
    return 1;
  }
 	return n * factorial(n - 1);
}


// 3. Longest Word

var sentence = prompt("Enter a sentence", "Type your sentence here");

function longest_word(sentence) {
  var sentenceWords = sentence.split(" ");
  var longWord = 0;
  for (var i = 0; i < sentenceWords.length; i++) {
    if (sentenceWords[i].length > longWord) {
      var longestWord = sentenceWords[i];
      longWord = sentenceWords[i].length;
    }
  }
  return longestWord;
}

longest_word(sentence);


// 4. Sum Nums

newNum = 0;

function sum_nums(num) {
  for (var i = num; i > 0; i--) {
    newNum += i - 1;
  }
  return newNum + num;
}


// 5. Time Conversion

var hours = 0;
var rest = 0;

function time_conversion(minutes) {
  hours = Math.floor(minutes / 60);
  rest = minutes % 60;
  if (rest == 0) {
    rest = "00";
  }
  console.log(hours + ":" + rest);
}

time_conversion(155); // 2:35
time_conversion(180); // 3:00


// 6. Count Vowels

var counter = 0;

function count_vowels(string) {
  var letters = string.split("");
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == "a" || letters[i] == "e" || letters[i] == "i" || letters[i] == "o" || letters[i] == "u") {
      counter++;
    }
  }
  return counter;
}

count_vowels("hello"); // 2

// 7. Palindrome

var string = prompt("Enter a string to check if its a palindrome", "Type your word here");

function palindrome(string) {
  var strSplit = string.split(" ");
  if (strSplit.length > 1) {
    alert("Please enter only one word as a string");
    string = prompt("Enter just ONE word to check if it´s a palindrome", "Type your word here");
  }

  if (string == string.toUpperCase()) {
    alert("Please enter a string written only in lower case");
    string = prompt("Enter a string to check if it´s a palindrome. Type only lower case letters.", "Type your word here");
  }

  if (string == string.toLowerCase()) {
    if (string === reverse(string)) {
      return true;
    } else {
      return false;
    }
  }

  function reverse(string) {
    var str = string.toLowerCase();
    var i = str.length - 1;
    var reversedString = "";

    while (i >= 0) {
      reversedString = reversedString + str.charAt(i);
      i--;
    }
    return reversedString;
  }
}

palindrome(string);

/*palindrome("ABBA"); // true
palindrome("abba"); // true
palindrome("wxyz"); // false*/


// 8. Most Letters

function nearby_az(string) {
  if (string == string.toLowerCase()) {
    for (var i = 0; i < string.length; i++) {
      if (string[0] == "a" && string[i + 2] == "z") {
        return true;
      } else {
        return false;
      }
    }
  } else {
    alert("Please enter only lowercase strings");
  }
}

nearby_az("ahz"); // true
nearby_az("ahhz"); // false


// 9. Two Sum

var newList = [];

function two_sum(nums) {
  for (var i = 0; i <= (nums.length - 2); i++) {
    if (nums[i] + nums[i + 1] === 0) {
      newList.push([i, i + 1]);
    } else {
      for (var j = 2; j < nums.length - 1; j++) {
        if (nums[i] + nums[i + j] === 0) {
          newList.push([i, i + j]);
        }
      }
    }
  }
  return newList;
}

two_sum([1, 3, -1, 5, -3]); // [[0,2],[1,4]]
two_sum([7, 5, -5, 9, 8, -7, 2, -2]); // [[0,5],[1,2],[6,7]]


// 10. Power of Two

function is_power_of_two(num) {
  for (var i = 1; i < num; i++) {
    if (Math.pow(2, i) === num) {
      return true;
    }
  }
  return false;
}

console.log(is_power_of_two(8)); // true
console.log(is_power_of_two(24)); // false
