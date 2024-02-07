
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








// function checkName() {
    
// }
// function deleteInvalids() {
    
// }
// function password() {
    
// }
// function monthlySavings() {
    
// }