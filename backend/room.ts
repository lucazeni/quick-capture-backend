import { User } from "./user";

export class Room {
    _id: number;
    _roomName: string;
    _host: User;
    _players: User[];
    _chat: string[];
    _roomSize: number;
    _roomTimeLimit: any;
    _gameStarted: boolean;
 
    constructor(roomName: string, host: User) {
        this._id = Math.random() * 10E16;
        this._roomName = roomName;
        this._host = host;
        this._roomTimeLimit = new Date();
        this._gameStarted = false;
    }

    getRoomName(): string {
        return this._roomName;
    }

    setRoomName(roomName: string) {
        this._roomName = roomName;
    }

    getHost(): User {
        return this._host;
    }

    setHost(host: User) {
        this._host = host;
    }

    getUsers(): User[] {
        return this._players;
    }

    addUser(player: User) {
        this._players.push(player);
        this._roomSize++;
    }

    removeUser(player: User) {
        const index = this._players.indexOf(player, 0);
        if (index > -1) {
            this._players.splice(index, 1);
         }
        this._roomSize--;
    }

    getMessages(): string[] {
        return this._chat;
    }

    addMessage(message: string) {
        this._chat.push(message);
    }

    getGameStarted(): boolean {
        return this._gameStarted;
    }

    setGameStarted(started: boolean) {
        this._gameStarted = started;
    } 

}