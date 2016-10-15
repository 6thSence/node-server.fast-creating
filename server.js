const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, err => {
    err ?
        console.error(err)
        : console.info(`Listening on port ${port}.`);
});