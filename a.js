

// const print = calculateMoney(-130);
// console.log(print);




// const print = checkName(199);
// console.log(print);




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
console.log( print);








// const print = monthlySavings([ 1000 , 2000 , 3000 ] , 5400);
// console.log(print);