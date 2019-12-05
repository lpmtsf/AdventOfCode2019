import { wire1, wire2 } from "./3input";

let arr = {
  R: 0,
  L: 0,
  D: 0,
  U: 0
};

let arr2 = {
  R: 0,
  L: 0,
  D: 0,
  U: 0
};

function Calculate(w1, w2) {
  let dir1;
  let dir2;
  let val1;
  let val2;
  let p = 0;
  while (p <= w1.length) {
    dir1 = w1[p].charAt(0);
    val1 = parseInt(w1[p].substr(1));
    dir2 = w2[p].charAt(0);
    val2 = parseInt(w2[p].substr(1));

    if (dir1 == "R") {
      arr.R += val1;
    } else if (dir1 == "L") {
      arr.L += val1;
    } else if (dir1 == "D") {
      arr.D += val1;
    } else if (dir1 == "U") {
      arr.U += val1;
    }

    if (dir2 == "R") {
      arr2.R += val2;
    } else if (dir2 == "L") {
      arr2.L += val2;
    } else if (dir2 == "D") {
      arr2.D += val2;
    } else if (dir2 == "U") {
      arr2.U += val2;
    }
    if (
      arr.R == arr2.R &&
      arr.L == arr2.L &&
      arr.D == arr2.D &&
      arr.U == arr2.U
    ) {
      console.log(obj1);
    } else {
      console.log(arr);
      console.log(arr2);
      p++;
    }
  }
}

Calculate(wire1, wire2);
