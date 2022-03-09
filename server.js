// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api2/:date?", (req, res) => {
  let date = req.params.date;

  //if string is empty, assign current time to variable
  if (date == undefined) {
    date = new Date();
  }

  //check if string starts with "YYYY-". if true keep it as it is, if not convert to number
  const regex = /^....[-]/;
  date = regex.test(date) ? date : date * 1;

  if (new Date(date) == "Invalid Date") {
    console.log("here");
    res.json({ error: "Invalid Date" });
  } else {
    date = new Date(date);
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});

// server.js
// mk

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

app.get("/api2/:date_string?", (req, res) => {
  let date_string = req.params.date_string;

  //if string is empty, assign current time to variable
  if (date_string == undefined) {
    date_string = new Date();
  }

//check if string starts with "YYYY-". if true keep it as it is, if not convert to number
  const regex = /^....[-]/;
  date_string = regex.test(date_string) ? date_string : date_string * 1;

  if (new Date(date_string) == "Invalid Date") {
    console.log("here");
    res.json({ error: "Invalid Date" });
  } else {
    date_string = new Date(date_string);
    res.json({
      unix: date_string.getTime(),
      utc: date_string.toUTCString()
    });
  }
});

app.get("/api/:date_string", (req, res) => {
  let dateString = req.params.date_string;
  //A 4 digit number is a valid ISO-8601 for the beginning of that year
  //5 digits or more must be a unix time, until we reach a year 10,000 problem

  if (/\d{5,}/.test(dateString)) {
    const dateInt = parseInt(dateString);
    //Date regards numbers as unix timestamps, strings are processed differently
    res.json({ unix: dateInt, utc: new Date(dateInt).toUTCString() });
  } else {
    let dateObject = new Date(dateString);
    if (dateObject.toString() === "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
    }
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
