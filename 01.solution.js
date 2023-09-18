// Case 1: Asynchronous programming with callbacks
const ONE_SECOND = 1000;

function fakeApi(callback) {
    setTimeout(() => {
        callback("Hello from asynchronous code")
    }, ONE_SECOND)
}

fakeApi((data) => console.log(data));

console.log("Hello from synchronous code");
