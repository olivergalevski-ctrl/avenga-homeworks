function checkGrade() {
    const grade = parseInt(prompt("Enter your grade: (1-5)"));
    if (isNaN(grade) || grade < 1 || grade > 5) {
        alert("Invalid grade. Please enter a number between 1 and 5.");
        return;
    }
    if (grade === 5) {
        return alert(`Внесена оценка: ${grade}
            Резултат: Одличен успех`);
}
    else if (grade === 4) {
       return alert(`Внесена оценка: ${grade}
            Резултат: Многу добар успех`);
}
    else if (grade === 3) {
       return alert(`Внесена оценка: ${grade}
            Резултат: Добар успех`);
}
    else if (grade === 2) {
      return alert(`Внесена оценка: ${grade}
             Резултат: Недоволен успех`);
}
    else if (grade === 1) {
       return alert(`Внесена оценка: ${grade}
        Резултат: Недоволен успех`);
}
}

checkGrade();
