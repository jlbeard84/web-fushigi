import { DrawManager, GamePlayingState, GameState } from "../";

const durationThreshold: number = 100;
const counterThreshold: number = 254;

class MainMenuState implements GameState {

    readonly name: string = "MainMenu";

    private counter: number = 0;
    private durationSum: number = 0;
    private finished: boolean = false;

    update(duration: number): void {
        this.durationSum += duration;

        if (this.durationSum >= durationThreshold) {
            this.durationSum = 0;
            this.counter++;
        }

        if (this.counter > counterThreshold) {
            this.finished = true;
        }
    }

    draw(drawManager: DrawManager) {
        drawManager.setFullScreenColor(0, 0, this.counter);
    }

    isFinished(): boolean {
        return this.finished;
    } 

    getNextState(): GameState {
        const newState = new GamePlayingState();
        return newState;
    }
}

export { MainMenuState };

