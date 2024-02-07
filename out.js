function calculateMoney(ticketSellCount) {
    if (typeof ticketSellCount === "number" && ticketSellCount > 0) {
        const ticketPrice = 120;
        const gardCost = 500;
        const staffCost = 50; 
        return (ticketSellCount * 120) - (gardCost + (8 * staffCost));
    }else{
        return `${ticketSellCount} is Invalid Number. Please enter valid number`;
    }
}

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

function deleteInvalids(array) {
    if(Array.isArray(array)){
        
        const returnArray = [];
        for (const items of array) {
            if (typeof items === "number" && Number.isNaN(items) === false) {
                returnArray.push(items);
            }
        }
        return returnArray;
    }else{
        return "Invalid Array";
    }
}

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

function monthlySavings(earningArray, livingCost) {
    if (Array.isArray(earningArray) && typeof livingCost === 'number') {
        
        let taxPay = 0;
        let totalIncome = 0;
        for (const items of earningArray) {
            if (items >= 3000) {
                taxPay = (items * 20) / 100;
            }
            totalIncome += items;
        }

        let saving = totalIncome - (taxPay + livingCost);

        if (saving >= 0) {
            return saving;
        }else {
            return "earn more";
        }

    }else{
        return "Invalid input";
    }
}