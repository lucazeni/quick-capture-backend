"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Room = /** @class */ (function () {
    function Room(roomName, host) {
        this._id = Math.random() * 10E16;
        this._roomName = roomName;
        this._host = host;
        this._roomTimeLimit = new Date();
    }
    Room.prototype.getRoomName = function () {
        return this._roomName;
    };
    Room.prototype.setRoomName = function (roomName) {
        this._roomName = roomName;
    };
    Room.prototype.getHost = function () {
        return this._host;
    };
    Room.prototype.setHost = function (host) {
        this._host = host;
    };
    Room.prototype.getUsers = function () {
        return this._players;
    };
    Room.prototype.addUser = function (player) {
        this._players.push(player);
        this._roomSize++;
    };
    Room.prototype.removeUser = function (player) {
        var index = this._players.indexOf(player, 0);
        if (index > -1) {
            this._players.splice(index, 1);
        }
        this._roomSize--;
    };
    Room.prototype.getMessages = function () {
        return this._chat;
    };
    Room.prototype.addMessage = function (message) {
        this._chat.push(message);
    };
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=room.js.map