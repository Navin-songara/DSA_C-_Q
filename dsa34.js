const fibonacci = n => {
    let [a, b] = [0, 1];
    while (--n) [a, b] = [b, a + b];
    return b;
  };
  console.log(fibonacci(6)); // 8
  