import { exec,spawn,execFile } from 'node:child_process'

// 使用方式
const  {stdout} = spawn('netstat');
stdout.on('data', (data) => {
  console.log(data.toString());
});
stdout.on('end', () => {
  console.log('end');
});