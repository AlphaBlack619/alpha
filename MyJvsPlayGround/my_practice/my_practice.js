let userInput = prompt("Enter a number:");
let number = parseFloat(userInput);
if (!isNaN(number)) {
  console.log("You entered a valid number: " + number);
} else {
  console.log("Invalid input. Please enter a number.");
}