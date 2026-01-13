const sectors = {
  MARS: { tax: 0.07, delayTax: 0.04 },
  EARTH: { tax: 0.05, delayTax: 0.02 },
  BELT: { tax: 0.1, delayTax: 0.06 },
};

const exchangeRates = {
  CREDITS: { GOLD: 0.5, OXYGEN: 2, SCRIP: 5 },
  GOLD: { CREDITS: 2, OXYGEN: 4, SCRIP: 10 },
  OXYGEN: { CREDITS: 0.5, GOLD: 0.25, SCRIP: 2 },
  SCRIP: { CREDITS: 0.2, GOLD: 0.1, OXYGEN: 0.5 },
};

function convertCurrency(amount, from, to) {
  if (from === to) {
    return amount;
  } else {
    return amount * exchangeRates[from][to];
  }
}

function calculateMonthlyInterest(balance, MonthlyRate, month = 1) {
  if (month > 12) {
    return balance;
  }
  const updatedBalance = balance + balance * MonthlyRate;

  return calculateMonthlyInterest(updatedBalance, MonthlyRate, month + 1);
}

const bankData = {
  admin: {
    pin: "0000",
    secret: "please",
    sector: "",
    currency: "",
    balance: 1000,
    status: "",
    locked: false,
    history: [],
  },

  sara: {
    pin: "1111",
    secret: "nebula",
    sector: "MARS",
    currency: "CREDITS",
    balance: 1000,
    status: "ACTIVE",
    locked: false,
    history: [],
  },

  oliver: {
    pin: "1111",
    secret: "nebula",
    sector: "BELT",
    currency: "OXYGEN",
    balance: 1000,
    status: "ACTIVE",
    locked: false,
    history: [],
  },

  ivan: {
    pin: "1111",
    secret: "nebula",
    sector: "EARTH",
    currency: "GOLD",
    balance: 1000,
    status: "ACTIVE",
    locked: false,
    history: [],
  },

  zoran: {
    pin: "1111",
    secret: "nebula",
    sector: "BELT",
    currency: "SCRIP",
    balance: 1000,
    status: "PENDING",
    locked: false,
    history: [],
  },
};

function mainMenu() {
  let choice = prompt("1. Login \n2. Exit \n3. Admin Login ");

  if (choice === "1") {
    login();
  } else if (choice === "2") {
    return;
  } else if (choice === "3") {
    adminLogin();
  } else {
    alert("Invalid choice");
    mainMenu();
  }
}

function login() {
  const username = prompt("Enter your username:");
  if (username === null) {
    mainMenu();
    return;
  }
  if (!bankData[username]) {
    alert(`${username} does not exist.`);
    login();
    return;
  }
  if (bankData[username].locked) {
    alert(`${username} is locked.`);
    login();
    return;
  }
  if (bankData[username].status === "DELETED") {
    alert(`${username} is deleted`);
    login();
    return;
  }
  if (bankData[username].status === "PENDING") {
    alert(`${username} status is pending.`);
    login();
    return;
  }

  const pin = prompt("Enter your PIN:");
  if (pin === null) {
    mainMenu();
    return;
  }
  if (pin === bankData[username].pin) {
    const secret = prompt("Enter your secret word");
    if (secret === null) {
      mainMenu();
      return;
    }
    if (secret === bankData[username].secret) {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      const result = a + b;
      const captcha = prompt("Captcha: " + a + "+" + b + " = ");
      if (captcha === null) {
        mainMenu();
        return;
      }
      if (parseInt(captcha) === result) {
        alert("Welcome " + username + "!");
        dashboard(username);
      } else {
        alert("Wrong answer!");
        bankData[username].locked = true;
        login();
      }
    } else {
      alert("Incorrect secret word");
      bankData[username].locked = true;
      login();
    }
  } else {
    alert("Incorrect PIN.");
    bankData[username].locked = true;
    login();
  }
}

function dashboard(username) {
  const choice = prompt(
    "Dashboard: \n1. Check Balance \n2. Transfer Money \n3. Calculate Interest \n4. View Transaction History \n5. Change PIN \n6. Logout"
  );

  if (choice === "1") {
    checkBalance(username);
  } else if (choice === "2") {
    transferMoney(username);
  } else if (choice === "3") {
    calculateInterest(username);
  } else if (choice === "4") {
    viewTransactionHistory(username);
  } else if (choice === "5") {
    changePin(username);
  } else if (choice === "6") {
    alert("Logged out.");
    mainMenu();
  } else {
    alert("Invalid choice");
    dashboard(username);
  }
}

function checkBalance(username) {
  alert(
    `Your balance is: ${bankData[username].balance} ${bankData[username].currency}`
  );
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

  const recipientData = bankData[recipient];

  if (recipientData.locked) {
    alert("Recipient account is locked.");
    transferMoney(username);
    return;
  }

  if (recipientData.status === "DELETED") {
    alert("Recipient account is deleted.");
    transferMoney(username);
    return;
  }

  if (recipientData.status === "PENDING") {
    alert("Recipient account is pending approval.");
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

  const taxedAmount = amount + amount * sectorTax;

  alert(
    `For the amount of ${amount} you need to pay ${
      taxedAmount - amount
    } tax for ${bankData[username].sector} to ${
      bankData[recipient].sector
    } sector transfer.`
  );

  if (taxedAmount > bankData[username].balance) {
    alert("Insufficient funds.");
    transferMoney(username);
    return;
  }

  const convertedAmount = convertCurrency(
    amount,
    bankData[username].currency,
    bankData[recipient].currency
  );

  const confirmTransfer = confirm(
    `Transfer ${taxedAmount} with tax to ${recipient}?`
  );

  if (!confirmTransfer) {
    dashboard(username);
    return;
  }

  bankData[username].balance -= taxedAmount;
  bankData[recipient].balance += convertedAmount;

  const date = new Date().toLocaleString();
  bankData[username].history.push(
    `Sent ${amount} to ${recipient} at ${date} with extra ${
      taxedAmount - amount
    } tax.`
  );
  bankData[recipient].history.push(
    `Received ${convertedAmount} from ${username} at ${date}.`
  );

  alert("Transfer successful.");
  dashboard(username);
}

function calculateInterest(username) {
  const initialBalance = Number(prompt("Enter initial balance"));
  const MonthlyInterestRate = Number(
    prompt("Enter monthly interest rate.") / 100
  );

  const finalBalance = calculateMonthlyInterest(
    initialBalance,
    MonthlyInterestRate
  );
  alert("Balance after 12 months: " + finalBalance.toFixed(2));
  dashboard(username);
}

function viewTransactionHistory(username) {
  const history = bankData[username].history;
  if (history.length === 0) {
    alert("No transactions yet.");
    dashboard(username);
    return;
  }
  alert("Transaction History:\n" + history.join("\n"));
  dashboard(username);
}

function changePin(username) {
  const currentPin = prompt("Enter your current PIN:");
  if (currentPin === null) {
    dashboard(username);
    return;
  }
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
