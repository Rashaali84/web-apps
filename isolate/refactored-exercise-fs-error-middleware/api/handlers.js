const fs = require('fs');
const path = require('path');
const config = require('../config');
const util = require('util');

const FILE_DIR = path.join(__dirname, '/..', config.FILES_DIR);

// some helper functions you can use
const writeFile = util.promisify(fs.writeFile);
const readDir = util.promisify(fs.readdir);

const handlers = {
    list: (req, res, next) => {
        console.log(FILE_DIR);
        readDir(FILE_DIR)
            .then((data) => {
                console.log('this is the directory listing', data);
                res.json(data);
            })
            .catch((err) => {
                if (err) {
                    console.log(err.message);
                    next(err);
                    return;
                }
            });
    },
    create: (req, res, next) => {
        const name = req.query.name
        // check if file already exists
        console.log(req.body);
        const content = req.body.fileContent;
        console.log(content);
        writeFile(`${FILE_DIR}/${name}`, content)
            .then(() => { res.sendStatus(200); })
            .catch((err) => {
                if (err) {
                    console.log(err.message);
                    next(err);
                    return;
                }
            });
    }
};

module.exports = handlers;
