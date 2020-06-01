var express = require('express');
var http = require('http');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:8080');

socket.on('connect', () => {
  console.log('Successfully connected!');

  socket.emit('addUser', 'Luca');
  
});

