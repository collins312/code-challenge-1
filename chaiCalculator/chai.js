
function calculateChaiIngredients() {
let userInput = prompt("How many cups of chai would you like to make?");
let numberOfCups = parseInt(userInput);

    if (isNaN(numberOfCups) || numberOfCups < 0) {
  
  console.log("Please enter a valid number greater than 0.");
  return;
}
  const waterPerCup = 200;    
  const milkPerCup = 50;      
  const teaLeavesPerCup = 1;   
  const sugarPerCup = 2;       

  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Print the results
  console.log(`To make ${numberOfCups} cup(s) of chai, you will need:`);
  console.log(`- Water: ${totalWater} ml`);
  console.log(`- Milk: ${totalMilk} ml`);
  console.log(`- Tea Leaves: ${totalTeaLeaves} teaspoon(s)`);
  console.log(`- Sugar: ${totalSugar} teaspoon(s)`);


// Prompt the user for input

// Validate input and call the function

console.log("Enjoy your Chai Bora!")
}
calculateChaiIngredients()
