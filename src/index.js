const input = "hey you guys pooted too";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i);
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let k = 0; k < vowels.length; k++) {
    //console.log(k);
    if (input[i] === vowels[k]) {
      // console.log(input[i])
      resultArray.push(input[i]);
    }
  }
}

//console.log(resultArray);

const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
