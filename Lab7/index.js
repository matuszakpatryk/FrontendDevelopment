const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

let DB = require('./services/database');
var thisDB = DB()

thisDB.addData()

app.get('/api/', (req, res) => {
    res.send(thisDB.getFlowers());
});

app.post('/api/create', (req, res) => {
    var result = thisDB.addFlower(req.body["id"], req.body["name"], req.body["quantity"], req.body["price"], req.body["colors"], req.body["isExotic"], req.body["type"], req.body["value"])
    res.send(result);
})

app.post('/api/delete', (req, res) => {
    var result = thisDB.removeFlower(req.body["id"])
    res.send(result)
})

app.post('/api/update/', (req, res) => {
    var result = thisDB.updateFlower(req.body["id"], req.body["name"], req.body["quantity"], req.body["price"], req.body["colors"], req.body["isExotic"], req.body["type"], req.body["value"])
    res.send(result)
})

app.listen(port, () => console.log("Example app listening on port " + port))