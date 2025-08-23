import os from 'os';

console.log(os.platform());
console.log(os.userInfo().username);
console.log(os.cpus().at(-1).model);
console.log(os.networkInterfaces());
