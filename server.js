// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = [];
var connected = [];
var connectedCounter = 0;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// when connected
io.on('connection', function (socket) {
    
    connectedCounter = connectedCounter + 1;
    console.log("a user connected");

    console.log("connected users: " + connectedCounter);

    // when a user is connected, get the "chat message" emit from index.html (its the value of the input in the form) and spit the msg
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

    // When disconnected
    socket.on('disconnect', function () {
        connectedCounter = connectedCounter - 1;
        console.log("a user disconnected");
        console.log("connected users: " + connectedCounter);
    })
});

// where the server deploys
localHostPort = 5500;
http.listen(localHostPort, function () {
    console.log('Server started on localhost:' + localHostPort);
});

// ---------- Lead tester: ---------- //
// Nadir El Tahir