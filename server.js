var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var path = require("path");
var nodemailer = require("nodemailer");
var password = require("./secret.js")

var app = express();
var PORT = process.env.PORT || 8080;

if (!PORT === 8080) {
	password = process.env
};

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: password.user,
      pass: password.pass
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '/views/layouts/partials')
}));
app.set("view engine", "handlebars");

app.use(express.static("./public"));

require('./routes/homepage-routes.js')(app, smtpTransport);

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});