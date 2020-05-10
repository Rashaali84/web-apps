/* reverse-engineering

  To understand what this exercise should do,
  practice using exercise-9-demo in the terminal

  your task is to reverse-engineer the behavior of the demo

  you'll know you've finished when it's impossible to tell
    if you're using the demo or your exercise
*/

// require dependencies
const fs = require('fs');
const path = require('path');

// declare constants
const START = Date.now();
const DOC_STRING = `
COMMANDS:

  list
    logs all of the file names in the current directory

  write <fileName> <text>
    writes the <text> the file with <fileName>

  append <fileName> <text>
    appends the <text> the file with <fileName>

FLAGS:

  -h
    print this helpful message
`;

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms. \n`,
  value
);


// --- main script ---

// fill in the _'s to reverse-engineer the behavior of exercise-9-demo.min.js

if (process.argv.includes('-h')) {
  log(0, DOC_STRING);
  process.exit(0);
};

const command = process.argv[2];
const fileName = process.argv[3];
const text = process.argv[4];


//check if command is missing 
if (!command) {
  log('1.a', 'a command is required, exiting');
  process.exit(0);
}
log('1.b', 'command: ' + command);

if (command === 'list') {
  log('1.a.1', 'reading filenames ...');
  const fileNames = fs.readdirSync(__dirname);
  log('1.b.2', fileNames);
  process.exit(0)
};

//check second arguments 
if (!fileName) {
  log('2.a', 'a file name is required, exiting');
  process.exit(0);
}
log('2.b', 'fileName: ' + fileName);

//check third arguments which in a  read/append  a text 
if (!text) {
  log('2.a.1', 'a text is required is required, exiting');
  process.exit(0);
}
log('2.b.1', 'text data  : ' + text);

//check write and aoppend commands 
if (command === 'write') {
  log('3.a', 'declaring write');
  const callBack = (err) => {
    if (err)
      throw err;

  };
  fs.writeFile(path.join(__dirname, fileName), text, callBack);
  log('3.b', 'write ' + fileName + ' ...');

} else if (command === 'append') {
  log('4.a', 'declaring append a text to the file.');
  const callBack = (err) => {
    if (err)
      throw err;

  };
  fs.appendFile(path.join(__dirname, fileName), text, callBack);
  log('4.b', 'append ' + fileName + ' ...');

} else {
  log('4.c', 'unknown command: ' + command);
};