function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // Base fare in KES
  const chargePerKm = 15; // Per kilometer charge in KES

  // Calculate total fare
  const totalFare = baseFare +( distanceInKm * chargePerKm);

  // Print result to console
  console.log(`Uko kwote? Io ni ${distanceInKm}km:`)
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
  console.log(`mpaka uko: KES ${distanceInKm*chargePerKm} `)
  console.log(`Total: ${totalFare.toFixed(2)}`)
  console.log(`Panda Pikipiki!`)

}

// Prompt the user for input
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = parseFloat(userInput); // Convert input to number

if (!isNaN(distance) && distance >= 0) {
  calculateBodaFare(distance);
} else {
  console.log("Tafadhali ingiza nambari sahihi ya kilomita.");
}
