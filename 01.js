// Case 1: Asynchronous programming with callbacks
const ONE_SECOND = 1000;

/**
 * TODO: Try to print to console
 * 1. Hello from synchronous code
 * 2. Hello from asynchronous code
*/

function fakeApi() {
    // How can we print lines in correct order? 🤔
    // Can higher order functions help us here? 💡
    console.log("2. Hello from asynchronous code");
}

// ❕DO not move fakeApi call and console.log around, thanks! 🫣
fakeApi();

console.log("1. Hello from synchronous code");