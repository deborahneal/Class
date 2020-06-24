//Creating a function that takes in two parameters.
 //Then return multiplication or addition or substraction or division

// creating our function.
// declaring an if statment to prouve our logic between the numbers. // wasn't necessary
// declaring a for loop iterating over each element. // wasn't necessary
// multiplication
// addition
// substraction
// division

function Calculator(operation, num1, num2){
    //let num2 = ''; 

    if (operation === '*' ){
        return num1 * num2;
    }
     else if(operation === '/' ){
        return num1 / num2;
    }
     else if(operation === '-' ){
        return num1 - num2;
    }
    else if(operation === '+'){
        return num1 + num2;
    }
    else{
    }

}
console.log(Calculator('*', 6, 3));
console.log(Calculator('/', 6, 3));
console.log(Calculator('+', 6, 3));
console.log(Calculator('-', 12, 6));




