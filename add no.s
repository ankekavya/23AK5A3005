const args = process.argv.slice(2);
const numbers = args.map(arg => parseFloat(arg)).filter(num => !isNaN(num));
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);