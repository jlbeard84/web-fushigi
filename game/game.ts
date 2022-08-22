class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(
        canvas: HTMLCanvasElement,
        renderingContext: CanvasRenderingContext2D) {

        this.canvas = canvas;
        this.context = renderingContext;

        this.clear();
    }

    private clear(): void {
        this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
    }

    public run(): void {
        this.context.fillStyle = "#FF0000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export { Game };