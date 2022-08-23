import { DrawManager, GameState, MainMenuState } from "../";

const durationThreshold: number = 100;
const counterThreshold: number = 254;

class IntroState implements GameState {

    readonly name: string = "Intro";

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
        drawManager.setFullScreenColor(0, this.counter, 0);
    }

    finish(): GameState {
        const newState = new MainMenuState();
        return newState;
    }
}

export { IntroState };

