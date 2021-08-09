// PROGRAM GUIDELINES
//1. Input will set a timer when user inputs any number from 1-9
//2. Program will beep right away if user presses 'b'
//3. Program will end if user presses "ctrl +c", and will leave a goodbye msg to the console


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.on('data', (data) => {
  const interval = data * 1000;
  if (data == "b") {
    process.stdout.write('\x07');
  } else if (data >= 1 && data <=9 ) {
    console.log(`\nTimer has been set for ${data} seconds...`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval)
  }
});

process.on('exit', () => {
  console.log('Already leaving? It was nice to meet you!')
});



