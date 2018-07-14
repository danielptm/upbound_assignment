const fs = require('fs');

const campaignHandler = (app) => {
    app.get('/campaign', (req, res) => {
        fs.readFile('./app/src/assets/campaigns.json', "utf-8", (err, data) => {
          res.send(JSON.parse(data));
        });
    })
}
module.exports = campaignHandler;
