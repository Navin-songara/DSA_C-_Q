const isAnagram = (a, b) =>
    a.split('').sort().join('') === b.split('').sort().join('');
  console.log(isAnagram("listen", "silent")); // true
  