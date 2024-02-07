
function calculateMoney(ticketSellCount) {
    if (typeof ticketSellCount === "number" && ticketSellCount > 0) {
        const ticketPrice = 120;
        const gardCost = 500;
        const staffCost = 50; 
        return (ticketSellCount * 120) - (gardCost + (8 * staffCost));
    }else{
        return `${ticketSellCount} is invalid. Please enter valid number`;
    }
}
// const print = calculateMoney();
// console.log(print);


function checkName(str) {

    if (typeof str === 'string') {
        const lastChar =str[str.length-1];
        const lastCharLowerCase = lastChar.toLowerCase();
    
        if (lastCharLowerCase === "a" || lastCharLowerCase === "y" || lastCharLowerCase === "i" || lastCharLowerCase === "e" || lastCharLowerCase === "o" || lastCharLowerCase === "u" || lastCharLowerCase === "w") {
            return "Good Name";
        }else{
            return "Bad Name";
        }
    }else{
        return "invalid";
    }

}

const print = checkName(['Rashed']);
console.log(print);










// function deleteInvalids() {
    
// }
// function password() {
    
// }
// function monthlySavings() {
    
// }