function concateArray(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if ( i > 0 && !["!", ".", ",", "?", ":"].includes(arr[i])) {
      result += " ";
    }
    result += arr[i];
  }

  return result;
}

console.log(concateArray(["hello", "world", "!"]));

const text = ["Hello", "there", "students", "of", "SEDC", "!"];
console.log(concateArray(text));