import { Room } from "./room";
import { User } from "./user";
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let users: User[] = [];
let rooms: Room[] = [];

io.on('connection', (socket) => {
  console.log(`user with address ${socket.conn.remoteAddress} connected`);

  socket.on('addUser', (name: string) => {

    const user: User = {name, team: 'unassigned'};
    users.push(user);
    console.log(user);

  });

  socket.on('addRoom', (roomName: string, host: User) => {

    const room = new Room(roomName, host);
    rooms.push(room);
    console.log(room);
  });
  
});

http.listen(8080, function () {
    console.log('listening to requests on localhost:8080');
  });