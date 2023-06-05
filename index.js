let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('*', (req, res) => {
    if(req.body.list !== "[]") {
        res.json(req.body);
    } else {
        res.json({list : ["l@zy_H@cK3r"]});
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 3000');
});