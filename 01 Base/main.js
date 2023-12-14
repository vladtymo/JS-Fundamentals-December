// ------------- console -------------
console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

// ------------- variables -------------
// create variable syntax: let <name> = <value>;

// ------------- data types
let price = 3200;                       // number
let koef = 4.85;                        // number
let length = 100000000000n;             // BigInt

let email = "example@gmail.com";        // string
let text = 'Hello dear, "Vlad"';        // string
let letter = 'A';                       // string

let isValid = true;                     // boolean

let undefinedVar = undefined;           // undefined (bad practice)
let emptyVar = null;                    // null

let unique = Symbol('blalba');          // symbol

let user = {                            // object
    login: "super12",
    age: 22,
    date: new Date(1990, 0, 10)
}

let colors = ["red", "green", "blue"]; // object

// [const] - cannot change the value after initialization
const id = 1002;
// id = 2000; - error

// ----- dynamic/weak/duck typin
console.log(typeof (price));
price = "3400$";
console.log(typeof (price));

// ----- show values into console
// concatenation: str + str
console.log("Price: " + price + "!!!");
// interpolation: `...${expression}...`
console.log(`Price: ${price}!!!`);

console.log("Price: ", price);
console.log("Unique: ", unique);
console.log("User: ", user);
console.log("Colors: ", colors);

// ----- check data type: typeof(expression)
console.log(typeof (price));
console.log(typeof (3 + 10));
console.log(typeof ('Hello' + '!!!'));

console.log(typeof (user));
console.log(typeof (colors));
console.log(typeof (unique));
console.log(typeof (undefinedVar));
console.log(typeof (emptyVar));

// ------------- browser dialog -------------
// alert - show message to client
alert("Hello from alert!");

// prompt - request data from client
let login = prompt("Enter your login:");
console.log("Hello dear, " + login);

// convert string type to number:
// 1: Number(value)
// 2: +"string"
let year = +prompt("Enter current year:");

console.log("Current year:", year);
console.log("Next year:", year + 1); // "2023" + "1" = "20231"

// confirm - ask client for yes/no
let like = confirm("Do you like JS?");

if (like == true) console.log("Great! Let's continue...");
else console.log("Sorry, please try again!");

// ternary operator: (condition ? true_value : false_value)
console.log(like == true ? "Great" : "Sorry");
