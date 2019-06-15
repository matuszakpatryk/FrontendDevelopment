const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

let DB = require('./services/database');
var thisDB = DB()

thisDB.addData()

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}

app.use(allowCrossDomain);

app.get('/api/', (req, res) => {
    res.send(thisDB.getFlowers());
});

app.post('/api/create', (req, res) => {
    var result = thisDB.addFlower(req.body["_id"], req.body["_name"], req.body["_quantity"], req.body["_price"], req.body["_colors"], req.body["_isExotic"], req.body["_type"], req.body["_value"])
    res.send(result);
})

app.post('/api/delete', (req, res) => {
    console.log("TEST " + req.body)
    var result = thisDB.removeFlower(req.body["id"])
    res.send(result)
})

app.post('/api/update/', (req, res) => {
    console.log("UPDATE CALLED! " + JSON.stringify(req.body))
    var result = thisDB.updateFlower(req.body["_id"], req.body["_name"], req.body["_quantity"], req.body["_price"], req.body["_colors"], req.body["_isExotic"], req.body["_type"], req.body["_value"])
    res.send(result)
})

app.listen(port, () => console.log("Example app listening on port " + port))