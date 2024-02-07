
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
    if (obj.hasOwnProperty("name") === true && obj.hasOwnProperty("birthYear") && obj.hasOwnProperty("siteName") && obj.birthYear > 1000 && obj.birthYear < 10000) {
    
        const objSiteName = obj.siteName;
        const firstObjNameChar = objSiteName.charAt(0);
        const firstObjNameCharCap = firstObjNameChar.toUpperCase();
        const wordWithoutFirstChar = objSiteName.slice(1);

        const finalCapSideName = firstObjNameCharCap + wordWithoutFirstChar;
    
        const output = finalCapSideName + "#" + obj.name + "@" + obj.birthYear;

        return output;



    }else{
        return "invalid";
    }
}

const print = password({ name: "maisha" , birthYear: 2002 });
console.log(print);





// function monthlySavings(earningArray, livingCost) {
//     if (Array.isArray(earningArray) && typeof livingCost === 'number') {
        
//         let taxPay = 0;
//         let totalIncome = 0;
//         for (const items of earningArray) {
//             if (items >= 3000) {
//                 taxPay = (items * 20) / 100;
//             }
//             totalIncome += items;
//         }

//         let saving = totalIncome - (taxPay + livingCost);

//         if (saving >= 0) {
//             return saving;
//         }else {
//             return "earn more";
//         }

//     }else{
//         return "Invalid input";
//     }
// }



// const print = monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
// console.log(print);