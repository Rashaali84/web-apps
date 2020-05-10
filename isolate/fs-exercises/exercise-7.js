/* helpful examples
  refactor-sync-to-async.js
  sync-vs-async.js
  append-text.js
  copy.js
*/

// require dependencies
const assert = require('assert');
const fs = require('fs');

// declare constants
const START = Date.now();
const SOURCE_PATH = __dirname + '/file.txt';
const ORIGINAL_TEXT = fs.readFileSync(SOURCE_PATH, 'utf-8');

// declare logging function
const log = (logId, value) => console.log(
  `\nlog ${logId}, ${Date.now() - START} ms: ${typeof value}\n`,
  value
);

// log initial values
log(0.1, SOURCE_PATH);
log(0.2, ORIGINAL_TEXT);

// --- main script ---

// there are two steps to this exercise
// 1. fill in the blanks (and pass!) // all should be sync 
//and I added call back function
// 2. refactor to asynchronous

const callBack = (err, content) => {
  if (err) {
    log(3, err);
    return;
  }

  log(3, content);
};

/*log(1, 'appending to file ...');
fs.appendFileSync(SOURCE_PATH, ORIGINAL_TEXT, callBack);
log(2, 'appending to file ...');
fs.appendFileSync(SOURCE_PATH, ORIGINAL_TEXT, callBack);
log(1, 'reading file ...');
const newText = fs.readFileSync(SOURCE_PATH, 'utf-8', callBack);
log(4, newText);
assert.strictEqual(newText, ORIGINAL_TEXT + ORIGINAL_TEXT + ORIGINAL_TEXT);
<<<<<<< HEAD
log(5, 'pass!');*/

/////////////////////
//refactor to async fs.appendFileSync(SOURCE_PATH, ORIGINAL_TEXT, callBack);
log(1, 'appending to file ...');
fs.appendFile(SOURCE_PATH, ORIGINAL_TEXT, function (err) {
  if (err) throw err;
  log(2, 'appending to file ...');
  fs.appendFile(SOURCE_PATH, ORIGINAL_TEXT, function (err) {
    if (err) throw err;
    log(1, 'reading file ...');
    fs.readFile(SOURCE_PATH, 'utf-8', function (err, contents) {
      if (err) throw err;
      log(4, contents);
      assert.strictEqual(contents, ORIGINAL_TEXT + ORIGINAL_TEXT + ORIGINAL_TEXT);
      log(5, 'pass!');
    });
  });
});


=======
log(5, '\033[32mpass!\x1b[0m');
>>>>>>> upstream/master
