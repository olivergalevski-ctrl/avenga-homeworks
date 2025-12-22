const yearOfBirth = parseInt(prompt("Enter your year of birth:"));
if (isNaN(yearOfBirth) || yearOfBirth <= 0) {
    alert("Invalid input. Please enter a valid year.");
}
const chinseZodiac = (yearOfBirth-4)%12;
if (chinseZodiac === 0) {
    alert("Your Chinese Zodiac sign is Rat");
} else if (chinseZodiac === 1) {
    alert("Your Chinese Zodiac sign is Ox");
} else if (chinseZodiac === 2) {
    alert("Your Chinese Zodiac sign is Tiger");
}
else if (chinseZodiac === 3) {
    alert("Your Chinese Zodiac sign is Rabbit");
} else if (chinseZodiac === 4) {
    alert("Your Chinese Zodiac sign is Dragon");
} else if (chinseZodiac === 5) {
    alert("Your Chinese Zodiac sign is Snake");
} else if (chinseZodiac === 6) {
    alert("Your Chinese Zodiac sign is Horse");
} else if (chinseZodiac === 7) {
    alert("Your Chinese Zodiac sign is Goat");
} else if (chinseZodiac === 8) {
    alert("Your Chinese Zodiac sign is Monkey");
}
else if (chinseZodiac === 9) {
    alert("Your Chinese Zodiac sign is Rooster");
}
else if (chinseZodiac === 10) {
    alert("Your Chinese Zodiac sign is Dog");
} else if (chinseZodiac === 11) {
    alert("Your Chinese Zodiac sign is Pig");   
}       

// SO SWITCH CASE

// const yearOfBirth = parseInt(prompt("Enter your year of birth:"));
// if (isNaN(yearOfBirth) || yearOfBirth <= 0) {
//     alert("Invalid input. Please enter a valid year.");
// }
// const chinseZodiac = (yearOfBirth-4)%12;

// switch (chinseZodiac) {
//     case 0:
//         alert("Your Chinese Zodiac sign is Rat");
//         break;
//     case 1:
//         alert("Your Chinese Zodiac sign is Ox");
//         break;  
//     case 2:
//         alert("Your Chinese Zodiac sign is Tiger");
//         break;  
//     case 3:
//         alert("Your Chinese Zodiac sign is Rabbit");
//         break;
//     case 4:
//         alert("Your Chinese Zodiac sign is Dragon");
//         break;
//     case 5:
//         alert("Your Chinese Zodiac sign is Snake");
//         break;
//     case 6:
//         alert("Your Chinese Zodiac sign is Horse");
//         break;
//     case 7:
//         alert("Your Chinese Zodiac sign is Goat");
//         break;      
//     case 8:
//         alert("Your Chinese Zodiac sign is Monkey");
//         break;
//     case 9:
//         alert("Your Chinese Zodiac sign is Rooster");
//         break;
//     case 10:
//         alert("Your Chinese Zodiac sign is Dog");
//         break;
//     case 11:
//         alert("Your Chinese Zodiac sign is Pig");
//         break;
// }       