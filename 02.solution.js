// Case 2: Separation of concerns with .map()
const lowerCaseCrew = ["Holden", "Nagata", "Burton", "Kamal"];

// 🤓 Below is how you'd typically use the native JavaScript .map() function:
// const UpperCaseCrew = lowerCaseCrew.map((str) => str.toUpperCase());

function map(transform, array) {
    const transformedValues = [];
    for(let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        const transformedValue = transform(currentValue);
        transformedValues.push(transformedValue);
    }

    return transformedValues;
}

const UpperCaseCrew = map((str) => str.toUpperCase(), lowerCaseCrew);
console.log(UpperCaseCrew);

