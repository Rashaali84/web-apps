/* reverse-engineering

  To understand what this exercise should do,
  practice using exercise-8-demo in the terminal

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

  read <fileName>
    logs the contents of <fileName>

  unlink <fileName>
    removes <fileName> from the directory

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

// fill in the _'s to reverse-engineer the behavior of exercise-8-demo.min.js

if (process.argv.includes('-h')) {
  log(0, DOC_STRING);
  process.exit(0);
};

const command = process.argv[2];
const fileName = process.argv[3];

if (!command) {
  log('1.a', 'a command is required, exiting');
  process.exit(0);
}
log('1.b', 'command: ' + command);


if (command === 'list') {
  log('3', 'reading filenames ...');
  const fileNames = fs.readdirSync(__dirname);
  log('4', fileNames);
  process.exit(0)
};

if (!fileName) {
  log('2.a', 'a file name is required, exiting');
  process.exit(0);
}
log('2.b', 'fileName: ' + fileName);



if (command === 'read') {
  log('3.a', 'declaring reading');
  const callBack = (err, contents) => {
    if (err)
      throw err;
    console.log(contents);
  };
  fs.readFile(path.join(__dirname, fileName), 'utf-8', callBack);
  log('4.a', 'read data from ' + fileName + ' ...');

} else if (command === 'unlink') {
  log('3.b', 'declaring unlink');
  const callBack = (err) => {
    if (err)
      throw err;
  };
  fs.unlink(path.join(__dirname, fileName), callBack);
  log('4.b', 'Unlink ' + fileName + ' ...');

} else {
  log('3.c', 'unknown command: ' + command);
}
