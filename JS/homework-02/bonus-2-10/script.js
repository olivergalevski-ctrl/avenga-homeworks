function registerUser() {
  const username = prompt("Enter your username:");
  if (username.length < 5) {
    alert(`Username: ${username}
       ->Error: Username cannot be empty and must be at least 5 characters long.`);
    return;
  }
  const password = prompt("Enter your password:");
  if (password.length < 8) {
    alert(`Password: ${password}
        ->Error: Password must be at least 8 characters long.`);
    return;
  } else if (
    !(
      password.includes("0") ||
      password.includes("1") ||
      password.includes("2") ||
      password.includes("3") ||
      password.includes("4") ||
      password.includes("5") ||
      password.includes("6") ||
      password.includes("7") ||
      password.includes("8") ||
      password.includes("9")
    )
  ) {
    alert(`Password: ${password}
        ->Error: Password must contain at least one number.`);
    return;
  }
  const confirmPassword = prompt("Confirm your password:");
  if (password !== confirmPassword) {
    alert(`Confirm Password: ${confirmPassword}
        ->Error: Passwords do not match.`);
    return;
  }
  const age = parseInt(prompt("Enter your age:"));
  if (isNaN(age)) {
    alert(`Age: ${age}
        ->Error: Age must be a number.`);
    return;
  } else if (age < 18) {
    alert(`Age: ${age}
        ->Error: You must be at least 18 years old to register.`);
    return;
  } else if (age <= 0) {
    alert(`Age: ${age}
        ->Error: Age must be a positive number.`);
    return;
  }
  alert(`Registration successful!
        Username: ${username}
        Password: ${password}
        Confirm: ${confirmPassword}
        Age: ${age}`);
}

registerUser();
