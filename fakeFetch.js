const ONE_SECOND = 1000;

export function fakeFetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                statusCode: 200,
                data: "OK"
            })
        }, ONE_SECOND);
    })
}