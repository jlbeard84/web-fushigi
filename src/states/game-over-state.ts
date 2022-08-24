import { DrawManager, GameState, IntroState } from "../";

const durationThreshold: number = 100;
const counterThreshold: number = 254;

class GameOverState implements GameState {

    readonly name: string = "GameOver";

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
        
        drawManager.setFullScreenColor(
            this.counter, 
            0, 
            0);
    }

    isFinished(): boolean {
        return this.finished;
    } 

    getNextState(): GameState {
        const newState = new IntroState();
        return newState;
    }
}

export { GameOverState };

