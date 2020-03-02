const express = require('express')
const app = express()
const PORT = 8000

const socket = require('socket.io')

const server = app.listen(PORT, () => {
    console.log('listening to port: ', PORT)
})

io = socket(server);

// creating a socket connection
io.on('connection', (socket) => {
    console.log('Socket Id-', socket.id);

    //server emit the received message to every client whose socket is listening to port 8000
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
