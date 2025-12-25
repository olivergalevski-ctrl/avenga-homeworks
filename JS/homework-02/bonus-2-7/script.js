function atmMachine(balance, withdrawAmount) {
if (withdrawAmount <= 0) {
  return "Invalid withdrawal amount.";
} else if (withdrawAmount > balance) {
  return "Insufficient funds.";
} else if (withdrawAmount <= balance) {
  balance -= withdrawAmount;
  return `Your new balance is $${balance}.`;
}
}
function runAtmMachine() {
  const accBalance = parseFloat(prompt("Enter your account balance:"));
  if (isNaN(accBalance) || accBalance < 0) {
    alert("Invalid account balance.");
    return;
  }
  const withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
  if (isNaN(withdrawAmount)) {
    alert("Invalid withdrawal amount.");
    return;
  }

  const result = atmMachine(accBalance, withdrawAmount);
  alert(
    `Balance: ${accBalance}\nWithrawal Amount: ${withdrawAmount}\nResult: ${result}`
  );
}

runAtmMachine();
