function sumOfMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if( typeof arr[i] === "number" && !Number.isNaN(arr[i])){
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }}

  return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}


const arr = [3, 5, 6, 8, 11];
console.log(sumOfMaxAndMin(arr));
const arr1 = [3, 5, 6, 8, "11"];
console.log(sumOfMaxAndMin(arr1));