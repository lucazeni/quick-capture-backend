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

    const user = new User(name);
    users.push(user);

  });

  socket.on('addRoom', (roomName: string, host: User) => {

    const room = new Room(roomName, host);
    rooms.push(room);
  });
  
});

setInterval(() => {cleanRooms();}, 6000);

function cleanUsers() {
    const currentTime: any = new Date();
    users = users.filter(user => { 
     return ((currentTime - user._lastUpdated) < 7200000);
    });
}

function cleanRooms() {
  const currentTime: any = new Date();
  rooms = rooms.filter(room => { 
    return ((currentTime - room._roomTimeLimit) < 24000);
  });
}

http.listen(8080, function () {
    console.log('listening to requests on localhost:8080');
  });
