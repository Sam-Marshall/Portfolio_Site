module.exports = function(app, smtpTransport) {

    app.get('/', function(req, res) {
        res.render('home');
    });

    app.get('/about', function(req, res) {
        res.render('about');
    });

    app.get('/portfolio', function(req, res) {
        res.render('portfolio');
    });

    app.get('/contact', function(req, res) {
        res.render('contact');
    });

    app.post("/sendemail", function(req, res) {
        var mailOptions = {
            to: 'enigmaticstacy@gmail.com',
            subject: 'Profile Email',
            text: req.body.text,
            html: "<b>Sender: </b>" + req.body.from + "<br> <b>Email: </b>" + req.body.email + "<p>" + "<hr />" + req.body.text + "</p>"
        }
        console.log("Message: " + mailOptions.text);
        smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
                res.end("error");
            } else {
                console.log("Message successfully sent from: " + req.body.address);
                res.send("whoaThere");
            }
        });
    });

}