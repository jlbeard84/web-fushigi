class Game {
    static instance: Game;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private isDebug: boolean;
    
    public lastRenderTime: number = 0;
    public fps: string = "";
    public priorUpdates: number[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        renderingContext: CanvasRenderingContext2D,
        isDebug: boolean = false) {

        this.canvas = canvas;
        this.context = renderingContext;
        this.isDebug = isDebug;

        Game.instance = this;

        this.clear();
    }

    private clear(): void {
        this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
    }

    public run(): void {
        this.gameLoop(0);
    }

    public update(duration: number): void {

        if (this.isDebug) {
            this.priorUpdates.push(duration);

            if (this.priorUpdates.length % 60 == 0) {
                const averageUpdate = this.priorUpdates.reduce((a, b) => a + b) / this.priorUpdates.length;
                this.fps = (1000 / averageUpdate).toFixed(1);

                console.log("Average duration: " + averageUpdate);
                console.log("Average fps: " + this.fps);
                this.priorUpdates = [];
            }
        }
    }

    public draw() {
        this.context.fillStyle = "#FF0000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.isDebug) {
            this.context.fillStyle = "#FFFFFF";
            this.context.fillText(`${this.fps} FPS`, 10, 10);        
        }
    } 

    public gameLoop(timestamp: number) {
        const duration = timestamp - Game.instance.lastRenderTime;

        Game.instance.update(duration);
        Game.instance.draw();

        Game.instance.lastRenderTime = timestamp;

        window.requestAnimationFrame(Game.instance.gameLoop);
    }
}

export { Game };