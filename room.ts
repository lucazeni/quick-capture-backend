import { Player } from "./player";

export type TeamType = 'TEAMA' | 'TEAMB' | 'UNASSIGNED';

export class Room {
    _id: number;
    _roomName: string;
    _host: Player;
    _players: Player[];
    _chat: String[];
    _roomSize: number;
    _roomTimeLimit: Date;

    constructor(roomName: string, host: Player) {
        this._id = Math.random() * 10E16;
        this._roomName = roomName;
        this._host = host;
        this._roomTimeLimit = new Date();
    }

    getRoomName(): string {
        return this._roomName;
    }

    setRoomName(roomName: string) {
        this._roomName = roomName;
    }

    getHost(): Player {
        return this._host;
    }

    setHost(host: Player) {
        this._host = host;
    }

    getPlayers(): Player[] {
        return this._players;
    }

    addPlayer(player: Player) {
        this._players.push(player);
        this._roomSize++;
    }



}