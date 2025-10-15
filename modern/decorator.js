function work(a, b) {
  console.log(a + b); // work 是一个任意的函数或方法
}

function spy(func) {
  wrapper.calls = [];
  function wrapper(...args) {
    wrapper.calls.push(args);
    
    return func.apply(this, args);
  }

  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(6, 7); // 16

console.log("-------");

// for (let args of work.calls) {
//   console.log("call:" + args.join());
// }
console.log(work.calls);
