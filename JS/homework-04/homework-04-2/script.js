
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < 5; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

function validateNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    if (!validateNumber(numbers[i])) {
      console.error("Error: One or more values are not valid numbers.");
      return;
    }
    sum += numbers[i];
  }

  return sum;
}

const numbers = [5, 10, 5, 20, 25];
const result = sumArray(numbers);

console.log("Sum: " + sumArray([5, 4, 3, 10, 2]));

console.log("Sum: " + sumArray([4, 2, "asd", 2, 3]));
  
  console.log("Sum: " + result);
  