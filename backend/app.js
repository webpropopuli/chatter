var app = require('express')();
var socket = require('socket.io');

//var app = express();

app.get('/', (req, res) => res.send("<p>I'm a server...don't touch me there</p>"))

server = app.listen(5000, function(){
    console.log('server listening on :5000')
});

io = socket(server);
//USER CONNECT
io.on('connection', (socket) => {
    console.log(`usrconnect: ${socket.id}`);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);  // {author: and message:}
    })
});

// USER DISCONNECT
io.on('disconnection', (socket) => {
    console.log(`usrdisconn: ${socket.id}`);
})


