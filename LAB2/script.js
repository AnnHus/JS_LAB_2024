(function () {

const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

const names2 = ["Bill", "John", "Jen", "Anna","Jason",  "Hannah",  "Steven","Ava", "Larry", "Paula", "Laura", "Jim", "Eve",  "Ada"];

console.log("**********");

for (let i = 0; i < names.length; i++) {
  if (names[i].toLowerCase().charAt(0) === "j") {
    SpeakGoodBye.speak(names[i]);
  } else {
    SpeakHello.speak(names[i]);
  }
}

console.log("**********");
console.log("*We are happy to see people whose name is a palindrome (matches forwards and backwards).All others - Good Bye :) *");
console.log("*An example of a palindrome on the left) *");
console.log("**********");

function isPalindrome(namesArr) {
  const reversedNamesArr = namesArr.split('').reverse().join('');
  return namesArr === reversedNamesArr;
}


for (let i = 0; i < names2.length; i++) {
  if (isPalindrome(names2[i].toLowerCase())) {
    SpeakHello.speak(names2[i]);
    
  } else {
    SpeakGoodBye.speak(names2[i]);
  }
}

})();