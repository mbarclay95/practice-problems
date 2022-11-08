
// STRING
// A string is any amount of characters that are surrounded by quotes. Single or double quotes can be used. Typescript
// the standard is to use single quotes.
const myFirstName: string = 'Celina';
const myLastName: string = "Solomon";

// There are many ways you can manipulate strings. Let's practice a bit!

// Add the 2 variables together and print out your full name
// const myFullName =
// console.log(myFullName);

// get the length of your first name
// const lengthOfFistName =
// console.log(lengthOfFirstName);

// get the first character in your first name
// const firstCharOfFirstName =
// console.log(firstCharOfFirstName);

// set your first name to be all upper case
// const firstNameUppercase =
// console.log(firstNameUppercase);


// NUMBER
// A number can include a whole number or a decimal (which is called a float)
const myNumber: number = 36;
const myFloat: number = 36.0;

// you can also change strings to numbers and vice versa

// change myNumber to a string with 3 decimal places
// const myNumberAsString =
// console.log(myNumberAsString);


// BOOLEAN
// A boolean is either true or false
const celinaIsCool: boolean = true;
const michaelIsCool: boolean = false;


// ARRAY
// an array can be any number of items. You can access an item in the array directly with its index. Indexes always start
// at 0! You can also loop through arrays
const myStringArray: string[] = ['Celina', 'is', 'having', 'so', 'much', 'fun'];
const myNumberArray: number[] = [4, 53, 1, 20, 254];

// print out the first item in myStringArray (Celina)
// const firstItem =
// console.log(firstItem);

// loop through myStringArray and print each item. Hint, use a for loop

// loop through myNumberArray and add up all the numbers to get the sum


// OBJECTS and TYPES
// an object is a key value pair. Each value can be accessed in the object by its corresponding key
const userMichael: {id: number, firstName: string, lastName: string, username: string} = {
    id: 1,
    firstName: 'Michael',
    lastName: 'Barclay',
    username: 'mbarclay36'
}

// First lets make this easier to reuse and easier to read by creating a type for the userObject
// type User =

// create a new user object called userCelina. Notice how you have to have all the properties in the User type
// const userCelina: User = {};

// print out the firstName property on userCelina
// const firstName =
// console.log(firstName);


// typeof and union types
// there is a function we can use to get the type of a variable called typeof. We can also union together multiple types
// using a |.
const numberOrString1: number | string = 'I am a string';
const numberOrString2: number | string = 14;

isNumberOrString(numberOrString1);
isNumberOrString(numberOrString2);

// complete this function that will print 'I am a number' if it's a number or 'I am a string' if it's a string
function isNumberOrString(numberOrString: number | string): void {
    // console.log(typeof numberOrString); hint
}


// NULL and UNDEFINED
// these are empty types. undefined means that variable literally doesn't exist. null means that variable exists but
// there is nothing in it. This is something confusing in javascript and most languages only have null
const emptyArray = [];

// see what this prints out
// const myVar = emptyArray[0];
// console.log(myVar);
