
import { User } from "./user";

export interface Coordinates {
    x: number;
    y: number;
    rotation: number;
}

type Player = User & Coordinates; 

export interface Bullet extends Coordinates {
    bulletOffset: number;
}