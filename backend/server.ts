import { Room } from "./room";
import { User } from "./user";
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let users = new Map();
let rooms = new Map();

io.on('connection', (socket) => {
  console.log(`user with address ${socket.conn.remoteAddress} connected`);

  socket.on('addUser', (id: string, name: string) => {
    console.log(id, name);
    const user = new User(id, name);
    users.set(id, user);

  });

  socket.on('addRoom', (id: string, roomName: string, host: User) => {
    console.log(id, roomName, host);
    const room = new Room(id, roomName, host);
    rooms.set(id, room);
  });
  
});

// setInterval(() => {cleanUsers();}, 6000);

// function cleanUsers() {
//     const currentTime: any = new Date();
//     users = users.filter(user => { 
//      return ((currentTime - user._lastUpdated) < 7200000);
//     });
// }

// function cleanRooms() {
//   const currentTime: any = new Date();
//   rooms = rooms.filter(room => { 
//     return ((currentTime - room._roomTimeLimit) < 24000);
//   });
// }

http.listen(8080, function () {
    console.log('listening to requests on localhost:8080');
  });
