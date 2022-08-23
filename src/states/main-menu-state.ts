import { DrawManager, GameState, IntroState } from "../";

class MainMenuState implements GameState {

    readonly name: string = "MainMenu";

    update(duration: number): void {

    }

    draw(drawManager: DrawManager) {

    }

    finish(): GameState {
        const newState = new IntroState();
        return newState;
    }
}

export { MainMenuState };

