const http = require('http');
const socketio = require('socket.io');
const fs = require('fs');

// Create server
const middleware = (req, res) => {
    fs.readFile(__dirname + '/index.html', (err, data) => {
        if(err){
            res.writeHead(500);
            return res.end('Error...');
        }
        res.writeHead(200);
        res.end(data);
    });
};
const app = http.createServer(middleware);
//Crear socket
const io = socketio.listen(app);
io.sockets.on('connection', (socket) => {
    socket.on('submit', (data) => {
        console.log('Submitted:', data);
        const response = data + ' response';
        console.log('Emmited: ', response);
        socket.emit('timer', response);
    });
});

app.listen(8080);
console.log('Server running...');