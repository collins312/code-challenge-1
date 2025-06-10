function estimateTransactionFee(amountToSend) {
  // Calculate 1.5% of the amount
  let fee = amountToSend * 0.015;

  // Apply minimum and maximum limits
  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  // Calculate total debited amount
  const totalDebited = amountToSend + fee;

  // Print results
  console.log(`Sending KES: KES ${amountToSend.toFixed(2)}`);
  console.log(`Total Transaction Fee: KES ${fee.toFixed(2)}`);
  console.log(`Total Amount Debited: KES ${totalDebited.toFixed(2)}`);
  console.log(`Send Money Securely`)
}

// Prompt the user for input
const userInput = prompt("Enter the amount you wish to send in KES:");
const amount = parseFloat(userInput);

// Validate input
if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Invalid input. Please enter a valid number greater than 0.");
}