import data from "./2input";

const inputCopy = data.slice();
let input;

/* FIRST PART OF THE PUZZLE */

function calculateState(i, noun, verb) {
  i[1] = noun;
  i[2] = verb;
  for (let p = 0; p < i.length; p += 4) {
    i[p] == 99
      ? true
      : i[p] == 1
      ? (i[i[p + 3]] = i[i[p + 1]] + i[i[p + 2]])
      : i[p] == 2
      ? (i[i[p + 3]] = i[i[p + 1]] * i[i[p + 2]])
      : (p = p + 4);
  }
  return i[0];
}

/* SECOND PART OF THE PUZZLE */

for (let k = 0; k <= 99; k++) {
  for (let j = 0; j <= 99; j++) {
    input = inputCopy.slice();
    if (calculateState(input, k, j) === 19690720) {
      console.log(k, j);
      console.log("Result: ", 100 * k + j);
    }
  }
}
