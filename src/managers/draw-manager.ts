class DrawManager {

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D) {

        this.canvas = canvas;
        this.context = context;
    }

    public get screenWidth(): number { return this.canvas.width; }
    public get screenHeight(): number { return this.canvas.height; }

    public setFullScreenColor(
        r: number,
        g: number,
        b: number) {

        this.context.fillStyle = `rgb(${r},${g},${b})`;
        this.context.fillRect(0, 0, this.screenWidth, this.screenHeight);
    }

}

export { DrawManager };