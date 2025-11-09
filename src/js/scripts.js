
async function main() {
  // This is where the code you're actually experimenting with goes.

let tots = await input("Please enter your total cost of goods: ");
let moola = await input("Please enter your total cash payment: ");
let disco = await input("Please enter discount code: ");

switch (disco) {  
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
    output("Invalid Entry");
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

finTots = moola - tots;
finTotsmoney = formatter.format(finTots)

if (finTots >= 0){
  output("Your change is " + finTotsmoney + ".")
} else{
  output("Insufficient Payment")
}
}   


