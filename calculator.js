const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

const Num_1 = parseFloat ( prompt ("Please enter the first number: "));
const Num_2 = parseFloat (prompt("Please enter the Second number: "));
const Operation = prompt("Please choose the operation (+, -, /, *): ")


let Result ;

if(Operation === `+`) { 
    Result = Num_1 + Num_2

}

else if ( Operation === `-`) {
    Result = Num_1 - Num_2
}

else if ( Operation === `*`) {
    Result = Num_1 * Num_2
}

else if ( Operation === `/`) {
    Result = Num_1 / Num_2

}

else {console.log ("Operation is not valid")

}

// I did this part just to look fancy :P 

let Final_Result;

Final_Result = Result.toFixed(3)


console.log (`${Num_1} ${Operation} ${Num_2}` + " = " + `${Final_Result}`)









