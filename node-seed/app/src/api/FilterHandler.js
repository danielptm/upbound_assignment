const fs = require('fs');

const filterHandler = (app) => {
    app.get('/filter', (req, res) => {
        fs.readFile('./app/src/assets/filters.json', 'utf-8', (err, data) => {
          res.send(JSON.parse(data));
        })
    })
}
module.exports = filterHandler;
