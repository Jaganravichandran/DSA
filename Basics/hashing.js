// Hashing

// npm init
// npm install prompt-sync

const prompt = require("prompt-sync")();

// number hashing
function numberHashing() {
  let n = prompt("Enter a value for n:");
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = prompt("Enter a value for arr[" + i + "]:");
  }

  //pre compute
  const hash = new Array(13).fill(0);
  for (let i = 0; i < n; i++) {
    hash[arr[i]] += 1;
  }

  // queries
  let q;
  q = prompt("Enter the number of queries:");
  while (q--) {
    let number = prompt("Enter the number for the query:");
    // fetching
    let count = hash[number];
    console.log(count == undefined ? 0 : count);
  }
}

// numberHashing();

// character hashing

// lowercase letters
function lowercase() {
  // String
  let s = prompt("Enter the String:");

  //pre compute
  const hash = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - 97]++;
  }

  // queries
  let q;
  q = prompt("Enter the number of queries:");
  while (q--) {
    let character = prompt("Enter the character for the query:");
    // fetching
    let count = hash[character.charCodeAt() - 97];
    console.log(count == undefined ? 0 : count);
  }
}

// lowercase();

// All characters

function characterHashing() {
  // String
  let s = prompt("Enter the String:");

  //pre compute
  const hash = new Array(256).fill(0);
  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i)]++;
  }

  // queries
  let q;
  q = prompt("Enter the number of queries:");
  while (q--) {
    let character = prompt("Enter the character for the query:");
    // fetching
    let count = hash[character.charCodeAt()];
    console.log(count == undefined ? 0 : count);
  }
}

// characterHashing();

// using map

function mapHashing() {
  let n = prompt("Enter a value for n: ");
  console.log(n);
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = prompt("Enter a value for arr[" + i + "]: ");
  }

  //pre compute
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  console.log(map);

  // queries
  let q = prompt("Enter the number of queries: ");
  while (q--) {
    let number = prompt("Enter the number for the query: ");
    // fetching
    let count = map.get(number);
    console.log(count == undefined ? 0 : count);
  }
}
mapHashing();
