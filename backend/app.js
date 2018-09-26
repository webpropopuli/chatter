var app = require('express')();
var socket = require('socket.io');

//var app = express();

app.get('/', (req, res) => res.send("<p>I'm a server...don't touch me there</p>"))

const port = process.env.port || 5002
server = app.listen(port, () => console.log(`server listening on :${port}`));

io = socket(server);
//USER CONNECT
io.on('connection', (socket) => {
    console.log(`usrconnect: ${socket.id}`);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);  // {author: and message:}
    })
});

// USER DISCONNECT I think this needs to move into sockek.on scope...
io.on('disconnection', (socket) => {
    console.log(`usrdisconn: ${socket.id}`);
})


