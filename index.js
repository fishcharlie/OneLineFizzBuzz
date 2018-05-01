const fizzbuzz = n => [...Array(n).keys()].map(i => i + 1).map(i => i % 5 != 0 && i % 3 != 0 ? i : i % 5 == 0 && i % 3 == 0 ? "FizzBuzz" : i % 3 == 0 ? "Fizz" : "Buzz");
