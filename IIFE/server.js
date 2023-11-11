

// require express to create a server
(( express, server, bodyParser, fs) => {
    // urlencoded is to pass/handle on any form
    server.use(bodyParser.urlencoded({ extended: true}));
    // server.use(express.static)
    // using server for get request
    server.get('/', (req, res) => {
        fs.readFile("./templates/home.html", "utf8", (error, results) => {
            res.send(results.toString())
        })
    })
    // start server
    server.listen(8000, (err) => {
        console.log(err || "server is ready at 8000...");
    })
})(
    require("express"),
    require("express")(),
    require("body-parser"),
    require("fs"),
)