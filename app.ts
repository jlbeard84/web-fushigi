import { Game } from "./src";

console.log("Hello fushigi");

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isDebug = urlParams.get("debug");

const game = new Game(
    canvas, 
    context,
    isDebug == "true" || isDebug == "True");

game.run();