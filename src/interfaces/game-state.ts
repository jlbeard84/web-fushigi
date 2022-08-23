import { GameObject } from "../";

interface GameState extends GameObject {
    readonly name: string;

    finish(): GameState;
}

export { GameState };