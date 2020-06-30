import { User } from "./user";
import { TSMap } from "typescript-map"

export class Room {
    _host: string;
    _roomId: string;
    _roomName: string;
    _players: TSMap<String, User>;
    _chat: string[];
    _roomSize: number;
    _roomTimeLimit: any;
    _gameStarted: boolean;

    constructor(userId: string, roomId: string, roomName: string) {
        this._host = userId;
        this._roomId = roomId;
        this._roomName = roomName;
        this._roomTimeLimit = new Date();
        this._gameStarted = false;
        this._players = new TSMap<String, User>();
        this._roomSize = 0;
    }

    getId(): string {
        return this._roomId;
    }

    setId(roomId: string) {
        this._roomId = roomId;
    }

    getRoomName(): string {
        return this._roomName;
    }

    setRoomName(roomName: string) {
        this._roomName = roomName;
    }

    getHost(): string {
        return this._host;
    }

    setHost(host: string) {
        this._host = host;
    }

    getUser(id: string): User {
        return this._players.get(id);
    }

    addUser(id: string, player: User) {
        this._players.set(id, player);
        this._roomSize++;
    }

    removeUser(id: string, player: User) {
        const index = this._players.delete(id);
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