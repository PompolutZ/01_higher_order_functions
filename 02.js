// Case 2: Separation of concerns with .map()
const lowerCaseCrew = ["Holden", "Nagata", "Burton", "Kamal"];

// 🤓 Below is how you'd typically use the native JavaScript .map() function:
// const UpperCaseCrew = lowerCaseCrew.map((str) => str.toUpperCase());

function map(transform, array) {
    // 🥹 add missing implementation here
    return array;
}

const UpperCaseCrew = map((str) => str.toUpperCase(), lowerCaseCrew);
// TODO: Make sure it prints: [ "HOLDEN", "NAGATA", "BURTON", "KAMAL" ]
console.log(UpperCaseCrew); 

