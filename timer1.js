let argv = process.argv.slice(2);

let counter = 0;

argv.forEach(timeStamp => {
  if (Math.sign(timeStamp) === - 1 || (Number.isInteger(Number.parseInt(timeStamp))) === false) {
    throw new Error;
  }
  counter = timeStamp;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, counter);
});
