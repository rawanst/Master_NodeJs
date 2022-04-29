const fs = require('fs');
const path = require('path');

const index = String(fs.readFileSync(path.join(__dirname, '../assets/index.html')));
console.log(index);

const logs = String(fs.readFileSync(path.join(__dirname, 'logs.txt')));
console.log(logs);
