const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log(countVowels("hello")); // 2
