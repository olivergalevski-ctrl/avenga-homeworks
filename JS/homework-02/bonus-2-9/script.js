// Мини систем за билет (цена според повеќе услови)
// 📌 Опис
// Напиши функција која ќе пресмета цена на билет.

// Побарај од корисникот:

// Возраст

// Дали е студент (yes / no)

// Дали е викенд (yes / no)

// 📋 Правила за цена
// Основна цена: 300 денари

// Ако е под 12 години → билетот е бесплатен

// Ако е студент → 20% попуст

// Ако е викенд → +50 денари

// Попуст не смее да направи цена под 0

// ⚠️ Редоследот е важен!

// 🧪 Примери


// Возраст: 10
// Студент: no
// Викенд: yes
// → Цена: 0 денари


// Возраст: 20
// Студент: yes
// Викенд: no
// → Цена: 240 денари


// Возраст: 30
// Студент: no
// Викенд: yes
// → Цена: 350 денари
       

function runProgram() {
    const age = parseInt(prompt("Enter your age:"));
    if (isNaN(age) || age <= 1) {
        alert("Invalid age input.");
        return; 
    }

    const isStudent = prompt("Are you a student? (yes/no):");
    if (isStudent.toLowerCase() !== 'yes' && isStudent.toLowerCase() !== 'no') {
        alert("Invalid student input.");
        return; 
    }

    const isWeekend = prompt("Is it weekend? (yes/no):");
    if (isWeekend.toLowerCase() !== 'yes' && isWeekend.toLowerCase() !== 'no') {
        alert("Invalid weekend input.");
        return; 
    }

    const price = calculateTicketPrice(age, isStudent, isWeekend);

    alert(`Age: ${age}
Student: ${isStudent}
Weekend: ${isWeekend}
-> Price: ${price} denars.`);
}

function calculateTicketPrice(age, isStudent, isWeekend) {
    const basePrice = 300;

    if (age < 12) {
        return 0;
    }       
    let finalPrice = basePrice;

    if (isStudent.toLowerCase() === 'yes') {
        finalPrice *= 0.8;
    }

    if (isWeekend.toLowerCase() === 'yes') {
        finalPrice += 50;
    }

    return finalPrice;
}

runProgram();
