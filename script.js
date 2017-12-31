var sum = 0.01;
for(var i = 1; i <= 30; i++){
    sum = sum * i;
 console.log("Day " + i + " = " + Math.round(sum*100)/100);   
}

//=================================================================
// Bonus:
// How many days would it take the servant to make $10,000?
var sum = 0.01;
for(var i = 1; i <= 30; i++){
    sum = sum * i;
    if(sum >= 10000){

        console.log("It takes " + i + " days to make between $10,000 and " + Math.round(sum*100)/100);
        break;
    }
 console.log("Day " + i + " = " + Math.round(sum*100)/100);   
}

// How about 1 billion?
var sum = 0.01;
for(var i = 1; i <= 30; i++){
    sum = sum * i;
    if(sum >= 1000000000){

        console.log("It takes " + i + " days to make between $1,000,000,000 and " + Math.round(sum*100)/100);
        break;
    }
 console.log("Day " + i + " = " + Math.round(sum*100)/100);   
}
// Infinity
var sum = 0.01;
for(var i = 1; i <= Infinity; i++){
    sum = sum * i;
    if(sum >= Infinity){

        console.log("It takes " + i + " days to make between infinity and " + Math.round(sum*100)/100);
        break;
    }
 console.log("Day " + i + " = " + Math.round(sum*100)/100);   
}