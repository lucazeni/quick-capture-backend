"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var http = require('http');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8080');
socket.on('connect', function () {
    console.log('Successfully connected!');
    socket.emit('addUser', 'Luca');
});
//# sourceMappingURL=client.js.map