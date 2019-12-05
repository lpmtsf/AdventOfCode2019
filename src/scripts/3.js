/* WORK IN PROGRESS */
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

function makeStep(dir1, val1, dir2, val2) {
  let higherValue;
  let lowerValue;
  if (val1 >= val2) {
    higherValue = val1;
    lowerValue = val2;
  } else {
    higherValue = val2;
    lowerValue = val1;
  }

  let step = 0;

  while (step < higherValue) {
    if (val1 > 0 && val2 > 0) {
      if (dir1 == "R") {
        arr.R++;
      } else if (dir1 == "L") {
        arr.L++;
      } else if (dir1 == "D") {
        arr.D++;
      } else if (dir1 == "U") {
        arr.U++;
      }

      if (dir2 == "R") {
        arr2.R++;
      } else if (dir2 == "L") {
        arr2.L++;
      } else if (dir2 == "D") {
        arr2.D++;
      } else if (dir2 == "U") {
        arr2.U++;
      }
    } else if (val2 == 0) {
      if (dir1 == "R") {
        arr.R++;
      } else if (dir1 == "L") {
        arr.L++;
      } else if (dir1 == "D") {
        arr.D++;
      } else if (dir1 == "U") {
        arr.U++;
      }
    } else if (val1 == 0) {
      if (dir2 == "R") {
        arr2.R++;
      } else if (dir2 == "L") {
        arr2.L++;
      } else if (dir2 == "D") {
        arr2.D++;
      } else if (dir2 == "U") {
        arr2.U++;
      }
    }
    val1--;
    val2--;
    step++;
    comparePositions();
  }
}

function comparePositions() {
  if (
    arr.R == arr2.R &&
    arr.L == arr2.L &&
    arr.D == arr2.D &&
    arr.U == arr2.U
  ) {
    console.log("CROSSED", arr);
  }
}

function Calculate(w1, w2) {
  let dir1;
  let dir2;
  let val1;
  let val2;
  let p = 0;
  while (p < w1.length) {
    dir1 = w1[p].charAt(0);
    val1 = parseInt(w1[p].substr(1));
    dir2 = w2[p].charAt(0);
    val2 = parseInt(w2[p].substr(1));
    makeStep(dir1, val1, dir2, val2);
    p++;
  }
}

Calculate(wire1, wire2);
