console.log("Start");

setTimeout(() => {
    console.log("setTimeout 1");
    Promise.resolve().then(() => {
        console.log("Promise 3");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
    setTimeout(() => {
        console.log("setTimeout 2");
    }, 0);
});

async function testAsync() {
    console.log("Async Start");
    await Promise.resolve().then(() => {
        console.log("Promise 2");
    });
    console.log("Async End");
}

testAsync();

console.log("End");

/***
 * 同步
 * console.log("Start");
 * console.log("Async Start");
 * console.log("End");
 * 
 * console.log("Promise 1");
 * console.log("Async End");
 * console.log("Promise 2");
 * 
 * console.log("setTimeout 1");
 * console.log("Promise 3");
 * console.log("setTimeout 2");
 * 异步
 * 延时队列 setTimeout console.log("setTimeout 2");
 * 微任务 Promise.resolve().then()        console.log("Promise 2");  console.log("Promise 3");
 */