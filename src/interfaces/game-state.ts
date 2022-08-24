import { GameObject } from "../";

interface GameState extends GameObject {
    readonly name: string;

    isFinished(): boolean;
    getNextState(): GameState;
}

export { GameState };