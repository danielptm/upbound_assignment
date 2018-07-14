const fs = require('fs');

const cardHandler = (app) => {
    app.get('/card', (req, res) => {
        fs.readFile('./app/src/assets/cards.json', 'utf-8', (err, data) => {
          res.send(JSON.parse(data));
        })
    })
}
module.exports = cardHandler;
