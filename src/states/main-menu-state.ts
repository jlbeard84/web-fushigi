import { DrawManager, GameState, IntroState } from "../";

const durationThreshold: number = 100;
const counterThreshold: number = 254;

class MainMenuState implements GameState {

    readonly name: string = "MainMenu";

    private counter: number = 0;
    private durationSum: number = 0;

    update(duration: number): void {
        this.durationSum += duration;

        if (this.durationSum >= durationThreshold) {
            this.durationSum = 0;
            this.counter++;
        }

        if (this.counter > counterThreshold) {
            this.counter = 0;
        }
    }

    draw(drawManager: DrawManager) {
        drawManager.setFullScreenColor(0, 0, this.counter);
    }

    finish(): GameState {
        const newState = new IntroState();
        return newState;
    }
}

export { MainMenuState };

