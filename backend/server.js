"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var room_1 = require("./room");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = [];
var rooms = [];
io.on('connection', function (socket) {
    console.log("user with address " + socket.conn.remoteAddress + " connected");
    socket.on('addUser', function (name) {
        var user = { name: name, team: 'unassigned' };
        users.push(user);
        console.log(user);
    });
    socket.on('addRoom', function (roomName, host) {
        var room = new room_1.Room(roomName, host);
        rooms.push(room);
        console.log("Room: " + room + " added");
    });
});
http.listen(8080, function () {
    console.log('listening to requests on localhost:8080');
});
//# sourceMappingURL=server.js.map