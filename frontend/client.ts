import { User } from "../backend/user";

var express = require('express');
var http = require('http');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:8080');

socket.on('connect', () => {
  console.log('Successfully connected!');
  const user = new User('luca');
  socket.emit('addRoom', 'Luca', user);
  
});

