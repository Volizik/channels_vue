import socket from 'socket.io-client';

const io = socket('http://localhost:3000');

io.emit('connected', {});

io.on('connected', (data) => {
    console.log('connected', data);
});

export default io;