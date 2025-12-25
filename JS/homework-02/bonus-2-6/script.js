function loginUser() {
    const correctPassword = "js2025";
    let attempts = 3;
    let password = prompt(`Enter your password, you have ${attempts} attempts:`);
    if (password === correctPassword) {
        return "Login successful!";
    }
    else if (password !== correctPassword) {
        attempts--;
        password = prompt(`Enter your password, you have ${attempts} attempts:`);
        if (password === correctPassword) {
            return "Login successful!";
        }
        else if (password !== correctPassword) {
            attempts--;
            password = prompt(`Enter your password, you have ${attempts} attempt:`);
            if (password === correctPassword) {
                return "Login successful!";
            }
            else if (password !== correctPassword) {
                attempts--;
                return "Access blocked due to too many failed login attempts.";
            }
        }
    } 
}

const text = loginUser();
alert(text);