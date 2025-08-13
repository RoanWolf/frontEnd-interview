console.log("Start");

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
    return Promise.resolve("Promise 2");
}).then((result) => {
    console.log(result);
});

async function testAsync() {
    console.log("Async Start");
    await Promise.resolve().then(() => {
        console.log("Promise 3");
    });
    console.log("Async End");
}

testAsync();

console.log("End");



/***
 * console.log("Start");
 * console.log("Async Start");
 * console.log("End");
 * console.log("Promise 1");
 * console.log("Promise 3");
 * console.log("Async End");
 * console.log("Promise 2");
 * console.log("setTimeout 1");
 */