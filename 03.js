// Case 3: Functional dependency injection
import { fakeFetch } from "./fakeFetch";

/**
 *  🤔 How can we leverage our knowledge about 
 * higher order functions, in order to provide callApi
 * with the dependencies it needs, in our case - `logger`,
 * so we can "build" a specific function `fetchWithLogger`?
*/
function callApi() {
    // logger.log(`Calling ${url}`);
    // const { statusCode } = await fakeFetch();
    // logger.log(`Response status: ${statusCode}`);
}

const consoleLogger = {
    log: (str) => console.log(str)
};

// 💡 Use dependency injection to configure our function with needed dependencies
const fetchWithLogger = callApi();

await fetchWithLogger("/users");