const input = [128392, 643281];
//const input = [111122, 643281];

function findPasswordNumber(input) {
  let lowEnd = input[0];
  let highEnd = input[1];

  let goodPasswords = [];

  for (let i = lowEnd; i <= highEnd; i++) {
    let answer = [];
    let digits = i
      .toString(10)
      .split("")
      .map(function(t) {
        return parseInt(t);
      });

    for (let k = 0; k <= digits.length - 1; k++) {
      let j = k + 1;
      if (digits[k] <= digits[k + 1]) {
        answer.push(digits[k]);
      } else if (k == digits.length - 1) {
        answer.push(digits[k]);
      }
    }

    if (answer.length == 6) {
      let doubles = false;
      let triples = false;
      for (let q = 0; q <= answer.length - 2; q++) {
        if (
          q < answer.length - 2 &&
          answer[q] == answer[q + 1] &&
          answer[q] != answer[q + 2]
        ) {
          doubles = true;
          if (q < answer.length - 2 && answer[q] == answer[q + 2]) {
            triples = true;
          }
        }
      }

      if (doubles == true) {
        goodPasswords.push(answer.join(""));
      }
    }
  }

  console.log(goodPasswords.length);
}

findPasswordNumber(input);
