console.log("Start");

async function testAsync() {
    
    await Promise.resolve().then(() => {
        console.log("Promise 1");
    });
    console.log("Async End");
}

testAsync();

console.log("End");
