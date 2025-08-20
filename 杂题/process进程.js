setTimeout(()=>console.log("over 5s") , 5000);
setTimeout(()=>{
    console.log('2s')
    process.exit();
}, 2000);

// 是时间到了把回调函数丢入延时队列，不是立刻，队列里面的任务也没有时间