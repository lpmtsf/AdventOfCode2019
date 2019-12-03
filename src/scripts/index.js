import data from './2input'

const inputCopy = data
let input
let p = 0

/* FIRST PART OF THE PUZZLE */

function calculateState(i, noun, verb) {
  i[1] = noun
  i[2] = verb
  while (p < i.length) {
    i[p] == 1
      ? (i[i[p + 3]] = i[i[p + 1]] + i[i[p + 2]])
      : i[p] == 2
      ? (i[i[p + 3]] = i[i[p + 1]] * i[i[p + 2]])
      : console.log(i[0])
    p += 4
  }
}

/* SECOND PART OF THE PUZZLE */

for (let k = 0; k <= 99; k++) {
  for (let j = 0; j <= 99; j++) {
    if (calculateState(inputCopy, k, j) === 19690720) {
      console.log('here it comes')
    }
  }
}
