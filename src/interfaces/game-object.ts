import { DrawManager } from "../";

interface GameObject {
    update(duration: number): void;
    draw(drawManager: DrawManager): void;
}

export { GameObject };