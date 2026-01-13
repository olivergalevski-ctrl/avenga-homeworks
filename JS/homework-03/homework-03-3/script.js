const bankData = {
    "admin": { pin: "0000", balance: 1000000, history: [] },
    "user1": { pin: "1234", balance: 500, history: [] },
    "user2": { pin: "9999", balance: 10, history: [] }
};


function mainMenu() {
    let choice = prompt("1. Login \n2. Exit");
    
    if (choice === "1") {
        login();
    } else if (choice === "2") {
        return; // Stops the program
    } else {
        alert("Invalid choice");
        mainMenu(); // <--- RECURSION: Function calls itself to restart
    }
}



function login() {
    const username = prompt("Enter your username:");
    if (!bankData[username]) {
        alert("Username does not exist.");
        login(); 
        return;
    }

    const pin = prompt("Enter your PIN:");
    if (pin === bankData[username].pin) {
        alert("Welcome " + username + "!");
        dashboard(username); 
    } else {
        alert("Incorrect PIN.");
        login(); 
    }
}


function dashboard(username) {
    const choice = prompt(
        "Dashboard: \n1. Check Balance \n2. Deposit Funds \n3. Withdraw Funds \n4. Transfer Money \n5. View Transaction History \n6. Change PIN \n7. Logout"
    );

    if (choice === "1") {
        checkBalance(username);
    } else if (choice === "2") {
        depositFunds(username);
    } else if (choice === "3") {
        withdrawFunds(username);
    } else if (choice === "4") {
        transferMoney(username);
    } else if (choice === "5") {
        viewTransactionHistory(username);
    } else if (choice === "6") {
        changePin(username);
    } else if (choice === "7") {
        alert("Logged out.");
        mainMenu(); 
    } else {
        alert("Invalid choice");
        dashboard(username); 
    }
}

function checkBalance(username) {
    alert("Your balance is: $" + bankData[username].balance);
    dashboard(username);
}

function depositFunds(username) {
    const amount = parseFloat(prompt("Enter the amount to deposit:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0.");
        depositFunds(username);
        return;
    }

    bankData[username].balance += amount;
    const date = new Date().toLocaleString();
    bankData[username].history.push("Deposited $" + amount + " at " + date);
    alert("Deposited $" + amount);
    dashboard(username); 
}

function withdrawFunds(username) {
    const amount = parseFloat(prompt("Enter the amount to withdraw:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0.");
        withdrawFunds(username);
        return;
    }

    if (amount > bankData[username].balance) {
        alert("Insufficient funds.");
        withdrawFunds(username);
        return;
    }

    const confirmWithdraw = confirm("Are you sure you want to withdraw $" + amount + "?");
    if (confirmWithdraw) {
        bankData[username].balance -= amount;
        const date = new Date().toLocaleString();
        bankData[username].history.push("Withdrew $" + amount + " at " + date);
        alert("Withdrew $" + amount);
    }

    dashboard(username); 
}

function transferMoney(username) {
  let recipient = prompt("Enter the recipient's username:");
  if (recipient === null) {
    dashboard(username);
    return;
  }

  if (!bankData[recipient]) {
    alert("Recipient does not exist.");
    transferMoney(username);
    return;
  }

  if (recipient === username) {
    alert("You cannot transfer money to yourself.");
    transferMoney(username);
    return;
  }

  const amount = parseFloat(prompt("Enter the amount to transfer:"));
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount greater than 0.");
    transferMoney(username);
    return;
  }

  const sectorTax =
    sectors[bankData[username].sector].tax +
    sectors[bankData[recipient].sector].delayTax;

  const taxedAmount = amount - amount * sectorTax;

  if (taxedAmount > bankData[username].balance) {
    alert("Insufficient funds.");
    transferMoney(username);
    return;
  }

  const convertedAmount = convertCurrency(
    taxedAmount,
    bankData[username].currency,
    bankData[recipient].currency
  );

  const confirmTransfer = confirm(
    `Transfer ${taxedAmount} to ${recipient}?`
  );

  if (!confirmTransfer) {
    dashboard(username);
    return;
  }

  bankData[username].balance -= taxedAmount;
  bankData[recipient].balance += convertedAmount;

  const date = new Date().toLocaleString();
  bankData[username].history.push(
    `Sent ${taxedAmount} to ${recipient} at ${date}`
  );
  bankData[recipient].history.push(
    `Received ${convertedAmount} from ${username} at ${date}`
  );

  alert("Transfer successful.");
  dashboard(username);
}


function viewTransactionHistory(username) {
    const history = bankData[username].history;
    alert("Transaction History:\n" + history.join("\n")); // ChatGPT kod
    dashboard(username);
}

function changePin(username) {
    const currentPin = prompt("Enter your current PIN:");
    if (currentPin !== bankData[username].pin) {
        alert("Incorrect PIN.");
        changePin(username); 
        return;
    }

    const newPin = prompt("Enter your new PIN:");
    if (newPin === bankData[username].pin) {
        alert("New PIN must be different from the current PIN.");
        changePin(username); 
        return;
    }

    bankData[username].pin = newPin;
    alert("PIN changed successfully.");
    dashboard(username); 
}

mainMenu();

