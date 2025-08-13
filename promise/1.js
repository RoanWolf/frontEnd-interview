console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

async function testAsync() {
  console.log("Async Start");
  await Promise.resolve();
  console.log("Async End");
}

testAsync();

console.log("End");

/**
     Start
    Async Start
    End
    Promise 1
    Async End
    Promise 2
    setTimeout
 */
