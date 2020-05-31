
import { User } from "./user";

export interface Coordinates {
    x: number;
    y: number;
    rotation: number;
}

export type Player = User & Coordinates; 

export interface Bullet extends Coordinates {
    bulletOffset: number;
    duration: Date;
}

