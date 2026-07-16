
// const math = require('./math');

// const result1 = math.add(5, 3);
// const result2 = math.subtract(10, 4);
// const result3 = math.multiply(6, 7);

// console.log(`Addition: ${result1}`);
// console.log(`Subtraction: ${result2}`);
// console.log(`Multiplication: ${result3}`);

// const os= require('os');
// console.log(`Operating System: ${os.type()}`);
// console.log(`Platform: ${os.platform()}`);
// console.log(`hostname: ${os.hostname()}`);
// console.log(`Total Memory: ${os.totalmem()}`);
// console.log(`Free Memory: ${os.freemem()}`);

const fs = require('fs');
fs.writeFile('message.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File has been created and saved!');
});
