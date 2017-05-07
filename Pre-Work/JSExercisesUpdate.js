// 1. Reverse
function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse("hello")); // olleh


// 2. Factorial // n! = n × (n-1)!
function factorial(n) { 
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(6)); // 720


// 3. Longest Word
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

console.log(longest_word("to be or not to be that is the question")); // question


// 4. Sum Nums
function sum_nums(num) {
  var newNum = 0;
  for (var i = num; i > 0; i--) {
    newNum += i - 1;
  }
  return newNum + num;
}

console.log(sum_nums(7)); // 7+6+5+4+3+2+1 = 28


// 5. Time Conversion
function time_conversion(minutes) {
  var hours = Math.floor(minutes / 60);
  var rest = minutes % 60; 
  if (rest == 0) {
    rest = "00";
  }
  console.log(hours + ":" + rest);
  //complete sentence: console.log(minutes + " minutes are " + hours + ":" + rest + " hours.");
}

console.log(time_conversion(155)); // 2:35
console.log(time_conversion(180)); // 3:00


// 6. Count Vowels
function count_vowels(string) {
  var counter = string.match(/[aeiou]/gi);
  return counter === null ? 0 : counter.length;
}

console.log(count_vowels("antidisestablishmentarianism")); // 11


// 7. Palindrome
function palindrome(string) {
  
  function reverse(string) {
  return string.split("").reverse().join("");
  }

  if (string === reverse(string)) {
      return true;
  } else {
      return false;
  }
}

console.log(palindrome("abba")); // true
console.log(palindrome("wxyz")); // false
console.log(palindrome("ABBA")); // true 


// 8. Most Letters
function nearby_az(string) {
  var str = string.split("");
  console.log(str);
  for (var i = 0; i < str.length - 2; i++) {
    if (str[i] == "a" && str[i + 2] == "z") {
      return true;
    }
  }
  return false;
}

console.log(nearby_az("ahz")); // true
console.log(nearby_az("ahhz")); // false
console.log(nearby_az("aaaaaxz")); // true


// 9. Two Sum
function two_sum(nums) {
  var newList = [];
  for (var i = 0; i <= nums.length - 2; i++) {
    for (var k = i + 1; k <= nums.length - 1; k++) {
      if (nums[i] + nums[k] === 0) {
        newList.push([i, k]);
      }
    }
  }
  return newList;
}

console.log(two_sum([1, 3, -1, 5, -3]));           // [[0,2],[1,4]]
console.log(two_sum([7, 5, -5, 9, 8, -7, 2, -2])); // [[0,5],[1,2],[6,7]]
console.log(two_sum([-7, 7, -6, 3, 9, 9, 7, 7]));  // [[0,1],[0,6],[0,7]] 


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