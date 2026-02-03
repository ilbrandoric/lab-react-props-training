
import React from "react";

function Random({ min, max }) {
  const randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <p>
      Random value between {min} and {max} → <strong>{randomNumber}</strong>
    </p>
  );
}

export default Random;


// Math.random() = returns decimal number like so: 0  ≤  Math.random()  <  1
// (max - min + 1) = Calculates how many integers are in a range or numbers. I.e. There are 5 integers between number 3 and 7. 
// Math.floor() = removes the decimals so you have integers
// + min = shifts the range upward
// "Give me a fair dice roll between X and Y."