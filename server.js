// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/index.html", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/extras.html", function(request, response) {
  response.sendFile(__dirname + "/views/extras.html");
});

app.get("/vidcode.html", function(request, response) {
  response.sendFile(__dirname + "/views/vidcode.html");
});

app.get("/biography.html", function(request, response) {
  response.sendFile(__dirname + "/views/biography.html");
});

app.get("/final-project.html", function(request, response) {
  response.sendFile(__dirname + "/views/final-project.html");
});

app.get("/survey.html", function(request, response) {
  response.sendFile(__dirname + "/views/survey.html");
});

app.get("/terms-and-conditions.html", function(request, response) {
  response.sendFile(__dirname + "/views/terms-and-conditions.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
