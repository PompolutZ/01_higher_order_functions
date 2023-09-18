// Case 2b: Functions composition
const lowerCaseCrew = ["Holden", "Nagata", "Burton", "Kamal"];

function map(transform) {
    return function transformValues(array) {
        const transformedValues = [];
        for(let i = 0; i < array.length; i++) {
            const currentValue = array[i];
            const transformedValue = transform(currentValue);
            transformedValues.push(transformedValue);
        }
    
        return transformedValues;
    }
}

const toUpperCaseArray = map((str) => str.toUpperCase())
const toLowerCaseArray = map((str) => str.toLowerCase())
const capitalizeArrayItems = map((str) => str ? str[0].toUpperCase() + str.substring(1) : "");

console.log(toUpperCaseArray(lowerCaseCrew));
console.log(toLowerCaseArray(lowerCaseCrew));
console.log(capitalizeArrayItems(toLowerCaseArray(toUpperCaseArray(lowerCaseCrew))))

