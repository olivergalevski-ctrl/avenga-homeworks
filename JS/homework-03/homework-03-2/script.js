
function humanToDogYears(humanYears) {
    if (humanYears < 0 || !Number.isInteger(humanYears)) {
        return "Invalid input";
    }
    const dogYears = humanYears * 7;
    return dogYears;
}   
console.log(humanToDogYears(5)); // 35

function dogToHumanYears(dogYears) {
    if (dogYears < 0 || !Number.isInteger(dogYears)) {
        return "Invalid input";
    }
    const humanYears = dogYears / 7;
    return humanYears;
}
console.log(dogToHumanYears(35)); // 5


// function calculateDogAge(age, conversionType = "humanToDog") {
//   if (conversionType === "humanToDog") {
//     return `Your dog is ${age * 7} dog years old.`;
//   } else if (conversionType === "dogToHuman") {
//     return `Your dog is ${age / 7} human years old.`;
//   } else {
//     return "Invalid conversion type. Use 'humanToDog' or 'dogToHuman'.";
//   }
// }

// // Examples:
// console.log(calculateDogAge(5)); // Human → Dog
// console.log(calculateDogAge(35, "dogToHuman")); // Dog → Human

// ChatGPT kod, ne znaev za conversionType parametar, nauchiv neshto novo :)