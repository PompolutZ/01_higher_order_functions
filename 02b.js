// Case 2b: Functions composition
const lowerCaseCrew = ["Holden", "Nagata", "Burton", "Kamal"];

/**
 * TODO: Add implementation here.
 * 🫣 Start from implementation from 02.js
 * 💡 Remember about currying?..
 */
function map(transform, array) {
    
}

const toUpperCaseArray = map((str) => str.toUpperCase())
const toLowerCaseArray = map((str) => str.toLowerCase())
const capitalizeArrayItems = map((str) => str ? str[0].toUpperCase() + str.substring(1) : "");

console.log(toUpperCaseArray(lowerCaseCrew));
console.log(toLowerCaseArray(lowerCaseCrew));
console.log(capitalizeArrayItems(toLowerCaseArray(toUpperCaseArray(lowerCaseCrew))))

