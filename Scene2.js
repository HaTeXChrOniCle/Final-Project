


class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }

    create() {





        


        this.background = this.add.image(0,0, "background")
        this.background.setOrigin(0,0);


        this.cake = this.add.image(500,10, "cake")
        this.icebear = this.add.image(200,500, "icebear")
        this.pandabear = this.add.image(400,500, "pandabear")
        this.grizzlybear = this.add.image(650,500, "grizzlybear")
        
        





        this.add.text(20, 20, "They Went Searching for Cake", {font: "25px Arial", fill: "Orange"});
    }


    moveCake(cake, speed) {
        cake.y += speed;
        if (cake.y > config.height) {
            this.resetCakePos(cake);
        }
    }

    resetCakePos(cake){
        cake.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        cake.x = randomX;
    }F

    update() {
        this.cake.y +=1;
    }




    
}

       

