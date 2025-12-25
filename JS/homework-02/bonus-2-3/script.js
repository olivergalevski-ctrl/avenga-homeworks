// function oddEvenChecker(number) {
//     if (isNaN(number)) {
//         return 'Input is not a valid number';
//     }
//     return number % 2 === 0 ? 'The number is even' : 'The number is odd';
// }

// const testNumber = parseInt(prompt("Enter a number to check if it's odd or even:"));
// const result = oddEvenChecker(testNumber);
// alert(`Entered number: ${testNumber}
//     Result: ${result}.`);



// se vo edna funkcija

function oddEvenChecker(number) {
    if (isNaN(number)) {
        return 'Input is not a valid number';
    }
    return number % 2 === 0 ? alert(`Entered number : ${number}\n The number is even`) : 
    alert(`Entered number : ${number}\n The number is odd`);
}

const testNumber = parseInt(prompt("Enter a number to check if it's odd or even:"));
oddEvenChecker(testNumber);

// namerno ne e vkluchen prompt vo funkcijata za da moze da se testira so razlicni vrednosti, bez da se vleguva so prompt sekogas.