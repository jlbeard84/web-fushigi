import { Game } from "./game";

console.log("Hello fushigi");

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

const game = new Game(
    canvas, 
    context);

game.run();