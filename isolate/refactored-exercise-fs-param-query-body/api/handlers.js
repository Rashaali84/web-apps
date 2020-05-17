const fs = require('fs');
const path = require('path');
const config = require('../config');
const util = require('util');
const FILES_DIR = path.join(__dirname, '/..', config.FILES_DIR);
// some helper functions you can use
const writeFile = util.promisify(fs.writeFile);
const readDir = util.promisify(fs.readdir);

const handlers = {
    valueParam: (req, res) => {
        const paramValue = req.params.value;

        console.log(`param value: ${paramValue}`);

        const fileName = 'param.txt';
        writeFile(`${FILES_DIR}/${fileName}`, paramValue)
            .then(() => {
                res.json({ message: `'${paramValue}' saved to ${fileName}` });
            })
            .catch((err) => {
                if (err && err.code === 'ENOENT') {
                    console.log(err);
                    res.status(404).end();
                    return;
                }
                if (err) {
                    console.log(err);
                    next(err);
                    return;
                }
            })

    },
    query: (req, res) => {
        const queryValue = req.query.value;

        console.log(`query value: ${queryValue}`);

        const fileName = 'query.txt';
        writeFile(`${FILES_DIR}/${fileName}`, queryValue)
            .then(() => {
                res.json({ message: `'${queryValue}' saved to ${fileName}` });
            })
            .catch((err) => {

                if (err && err.code === 'ENOENT') {
                    console.log(err);
                    res.status(404).end();
                    return;
                }
                if (err) {
                    console.log(err);
                    next(err);
                    return;
                }
            });
    },
    body: (req, res) => {
        const bodyValue = req.body.value;

        console.log(`body value: ${bodyValue}`);

        const fileName = 'body.txt';
        writeFile(`${FILES_DIR}/${fileName}`, bodyValue)
            .then(() => { res.json({ message: `'${bodyValue}' saved to ${fileName}` }); })
            .catch((err) => {
                if (err && err.code === 'ENOENT') {
                    console.log(err);
                    res.status(404).end();
                    return;
                }
                if (err) {
                    console.log(err);
                    next(err);
                    return;
                }
            });
    }
};

module.exports = handlers;
