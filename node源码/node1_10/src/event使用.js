// 引入内置的 EventEmitter 类
import { EventEmitter } from "node:events";

// 创建事件实例
const emitter = new EventEmitter();

const fn = (name) => {
  console.log(`Hello, ${name}!`);
};

// 注册事件监听器
emitter.on("greeting", fn);

// 触发事件
emitter.emit("greeting", "Alice"); // 输出: Hello, Alice!

emitter.off("greeting", fn);

emitter.emit("greeting", "Bob"); // 输出: Hello, Bob!
