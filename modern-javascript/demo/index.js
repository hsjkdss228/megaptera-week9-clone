/* eslint-disable no-console */

function main() {
  const name = 'Chikorita';

  console.log(`Hello, ${name}!`);
  console.log(`1 + 2 = ${1 + 2}`);

  const value = 0;
  if (value + 2 > 3) {
    console.log(`${value} + 2가 3보다 크다니...`);
  }

  // for (let number = 1; number < 10; number += 2) {
  //   console.log(number);
  // }

  const numbers = [10, 20, 30, 40, 50];

  // for (let i = 0; i < 8; i += 1) {
  //   console.log(numbers[i % numbers.length]);
  // }

  // for (const number of numbers) {
  //   console.log(number);
  // }

  numbers.forEach((number) => {
    console.log(number);
  });

  const numbers2 = numbers.map((i) => i * 3);

  console.log(numbers2);
}

main();
