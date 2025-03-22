// Lemonade change

function lemonadeChange(bills) {
  let n = bills.length;
  let five = 0,
    ten = 0;
  for (let i = 0; i < n; i++) {
    if (bills[i] == 5) {
      five = five + 1;
    } else if (bills[i] == 10) {
      if (five) {
        five = five - 1;
        ten = ten + 1;
      } else {
        return false;
      }
    } else {
      if (ten && five) {
        five = five - 1;
        ten = ten - 1;
      } else if (five >= 3) {
        five = five - 3;
      } else {
        return false;
      }
    }
  }
  return true;
}

let bills = [5, 5, 5, 10, 20];
let res = lemonadeChange(bills);
console.log(res);
