

class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }


    preload(){
        this.load.image("background", "assets/background.png");
        this.load.image("icebear", "assets/icebear.png");
        this.load.image("pandabear", "assets/pandabear.png");
        this.load.image("grizzlybear", "assets/grizzlybear.png")
        this.load.image("cake", "assets/cake.png");
    }

   
    create() {

    
        this.add.text(20, 20, "loading game...");
        this.scene.start("playGame");
    }
}