let nums_arr = [1, 2, 3];
let n = null;

while (n === null) {
  n = parseInt(prompt("Reqem daxil edin:"));

  if (isNaN(n)) {
    console.log("Kecerli reqem daxil etmediniz.");
    n = null;
  } else {
    add();
  }
}

function add() {
  if (isValid()) {
    for (let i = 0; i < n; i++) {
      let num = nums_arr.slice(-3).reduce((a, b) => a + b);
      nums_arr.push(num);
    }
  } else {
    console.log("Daxil edilen eded dogru deyil.");
  }
}

function isValid() {
  if (n > 0) {
    return true;
  } else {
    console.log("Daxil edilden eded duzgun deyil");
    return false;
  }
}

console.log(nums_arr);
