
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


// function checkName(str) {

//     if (typeof str === 'string') {
//         const lastChar =str[str.length-1];
//         const lastCharLowerCase = lastChar.toLowerCase();
    
//         if (lastCharLowerCase === "a" || lastCharLowerCase === "y" || lastCharLowerCase === "i" || lastCharLowerCase === "e" || lastCharLowerCase === "o" || lastCharLowerCase === "u" || lastCharLowerCase === "w") {
//             return "Good Name";
//         }else{
//             return "Bad Name";
//         }

//     }else{
//         return "invalid";
//     }

// }

// const print = checkName(['Rashed']);
// console.log(print);


// function deleteInvalids(array) {
//     if(Array.isArray(array)){
        
//         const returnArray = [];
//         for (const items of array) {
//             if (typeof items === "number" && Number.isNaN(items) === false) {
//                 returnArray.push(items);
//             }
//         }
//         return returnArray;
//     }else{
//         return "Invalid Array";
//     }
// }

// const print = deleteInvalids({num: [ 1 , 2 , 3 ]});
// console.log(print);



function password(obj) {
    
}

const print = password({  birthYear: 1999 , siteName: "google" });
console.log(print);





// function monthlySavings(earningArray, livingCost) {
//     if (Array.isArray(earningArray) && typeof livingCost === 'number') {
        
//         let taxPay = 0;
//         let totalIncome = 0;
//         for (const items of earningArray) {
//             if (items > 3000) {
//                 taxPay = (items * 20) / 100;
//             }
//             totalIncome += items;
//         }

//         let saving = totalIncome - (taxPay + livingCost);

//         if (saving > 0) {
//             return saving;
//         }else {
//             return "earn more";
//         }

//     }else{
//         return "Invalid input";
//     }
// }



// const print = monthlySavings(100, [ 900 , 2700 , 3400]);
// console.log(print);