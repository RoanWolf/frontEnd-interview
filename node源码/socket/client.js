import { io } from "socket.io-client";

const socket = io();

// 监听服务端发来的消息
socket.on("welcome", (data) => {
    console.log("收到服务器消息:", data);
});

// 向服务端发送消息
socket.emit("message", "Hello Server!");

// 发送广播消息
socket.emit("broadcast", "这是一个广播消息");

// 监听其他消息
socket.on("message", (data) => {
    console.log("收到消息:", data);
});