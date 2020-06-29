import { Room } from "./room";
import { User } from "./user";
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let userMap = new Map<String, User>();
let roomMap = new Map<String, Room>();

io.on('connection', (socket) => {
  console.log(`user with address ${socket.conn.remoteAddress} connected`);

  socket.on('addUser', (id: string, name: string) => {
    console.log(id, name);
    const user = new User(id, name);
    userMap.set(id, user);

  });

  socket.on('addRoom', (userId: string, roomId: string, roomName: string) => {
    const room = new Room(userId, roomId, roomName);
    const user = userMap.get(userId);
    room.addUser(userId, user);
    roomMap.set(roomId, room);
    console.log(roomMap);
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
