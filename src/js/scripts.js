
async function main() {
  // This is where the code you're actually experimenting with goes.

let tots = await input("Please enter your total cost of goods: ");    // Collect total cost null = 0
if (tots == null) {
  tots = 0
}
let moola = await input("Please enter your total cash payment: ");    // Collect Cash payment, null = 0
if (moola == null) {
  tots = 0
}
let disco = await input("Please enter discount code: ");              // Collects discount code, null = 0

switch (disco) {                                                      // Switch case applies discount code to total cost, null = 0
  case null:
    tots = tots * 1;
    break;
  case "0":
    tots = tots * 1;
    break;
  case "1":
    tots = tots * 0.9;
    break;
  case "2":
    tots = tots * 0.85;
    break;
  case "3":
    tots = tots * .75;
    break;
  case "4":
    tots = tots * 0.65;
    break;
  case "5":
    tots = tots* 0.6;
    break;
  default:
    output("Invalid Entry");                                           // Default Invalid Entry for any input other than 0 - 5
}

const formatter = new Intl.NumberFormat('en-US', {                     // Formats integer to currency
  style: 'currency',
  currency: 'USD'
});

finTots = moola - tots;                                                // Calculates change
finTotsmoney = formatter.format(finTots)                               // Converts change to currency

if (finTots >= 0){                                                     // If payment is sufficient, outputs message with change in currency
  output("Your change is " + finTotsmoney + ".")
} else{
  output("Insufficient Payment")                                       // Else if change is less than 0, outputs Insufficient payment message
}
}   


