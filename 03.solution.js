// Case 3: Functional dependency injection
import { fakeFetch } from "./fakeFetch";

function callApi({ logger }) {
    return async function callWithDependencies(url) {
        logger.log(`Calling ${url}`);
        const { statusCode } = await fakeFetch();
        logger.log(`Response status: ${statusCode}`);
    }
}

const consoleLogger = {
    log: (str) => console.log(str)
};

const fetchWithLogger = callApi({ logger: consoleLogger })

await fetchWithLogger("/users");