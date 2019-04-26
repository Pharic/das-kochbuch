const express = require('express');

const app = express();
const dotenv = require('dotenv');
const ENV = dotenv.config({path: './config/test.env'}).parsed;
const mysql = require('mysql');
const db = mysql.createConnection({
  host:       ENV.DB_HOST,
  user:       ENV.DB_USER,
  password:   ENV.DB_PASS,
  database:   ENV.DB_TBLE
});

app.get('/user/register', function(req,res) {
  try {
    return "hallo";
  } catch(error) {
    console.log(error);
  }
})

app.get('/user/login', function (req, res) {
db.connect(function(err) {
    if (err) throw err;

    db.query("SELECT username, password FROM user", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

    db.end();
  });
});

app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err);
  res.status(500).send();
});

app.listen(3000, () => {
  console.log('Server started!');
})




/* const express = require ('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({ extended: false})
)

let Users = require ('./routes/Users')

app.use('./users', Users)

app.listen(port, function () {
  console.log("Server is running on port " + port)
}) */









