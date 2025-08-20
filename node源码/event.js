import { EventEmitter } from "node:events";
const bus = new EventEmitter();

const fn = (msg) => console.log(msg);
bus.on("test", fn);

bus.emit("test", "触发");

bus.off("test", fn);
