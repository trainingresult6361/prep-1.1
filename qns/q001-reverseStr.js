// Semordnilap
const semorOdd = ["d", "e", "c", "a", "f"];
const semorEven = ["s", "p", "a", "m"];

// Palindrome
const palinOdd = ["m", "a", "d", "a", "m"];
const palinEven = ["n", "o", "o", "n"];

const rand = ["1", "2", "3", "4", "5"];

const reverseStr = (arr) => {
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    const startChar = arr[i];
    const endChar = arr[arr.length - 1 - i];

    arr.splice([i], 1, endChar);
    arr.splice([arr.length - 1 - i], 1, startChar);
  }

  return arr;
};

console.log(semorOdd.join(""), "<-->", reverseStr(semorOdd).join("")); // returns decaf <--> faced
console.log(semorEven.join(""), "<-->", reverseStr(semorEven).join("")); // returns spam <--> maps

console.log(palinOdd.join(""), "<-->", reverseStr(palinOdd).join("")); // returns madam <--> madam
console.log(palinEven.join(""), "<-->", reverseStr(palinEven).join("")); // returns noon <--> noon

console.log(rand.join(""), "<-->", reverseStr(rand).join(""));
