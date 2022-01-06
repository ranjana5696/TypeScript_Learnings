// unkown and Never types

// let  userInput : unknown;
// let userName : string;

// userInput = 5 ;
// // userInput = "riya"

// if ( typeof userInput === "string" ) {
//     userName = userInput
//     console.log(userName)
// }else {
//     console.log(userInput)
// }

function generateError(message: string, code : number) : never {
    throw {Msg: message, errorCode: code};
}

generateError("Error occured!", 501);                   //Never and Void work in same way
