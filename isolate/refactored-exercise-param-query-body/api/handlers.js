

const handlers = {
    paramValue: (req, res) => {
        const paramValue = req.params.value;

        console.log(`param value: ${paramValue}`);

        const responseData = {
            paramValue,
        };
        res.json(responseData);
    },
    query: (req, res) => {
        const queryValue = req.query.value

        console.log(`query value: ${queryValue}`);

        const responseData = {
            queryValue,
        };
        res.json(responseData);
    },
    body: (req, res) => {
        const bodyValue = req.body.value;

        console.log(`body value: ${bodyValue}`);

        const responseData = {
            bodyValue,
        };
        res.json(responseData);
    }


};

module.exports = handlers;
