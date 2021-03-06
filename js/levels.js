

class LevelMonday {

    panorama =  new Panorama("#0ba754", "url('images/desert.png')", '#8b4a46' );
    mainDiv;
    dictionary = {};

    constructor(){
        this.mainDiv = this.panorama.createMainDiv();
    }

    getMainDiv(){
      return this.mainDiv;
    }

    createFantom(){
        let fantom = new Fantom(this.mainDiv, this.dictionary);
            fantom.setMargins("50px", "50px")
    }

    createArm(){
        let arm = new Arm(this.mainDiv, this.dictionary,"gun");
        arm.setMargins(window.innerWidth);
        return arm;
    }



    getEnemies(){
        return [
             new DrunkJoy(this.mainDiv,this.dictionary,"drunker1"),
             new DrunkBill(this.mainDiv,this.dictionary,"drunker2"),
             new DrunkPhill(this.mainDiv,this.dictionary,"drunker3")
         ];
    }


    createDecoration(){
        let offset = 10;
        let maxValue = window.innerHeight / 10;

            for(let i = 1; i< 10; i++){

                let size = 300;
                let marginBottom = getRandValue(offset, maxValue - (2 * offset));
                let marginLeft = getRandValue(0, window.innerWidth - size);

                let cactus = new Cactus(this.mainDiv, this.dictionary, "cactus"+ i);
                    cactus.setMargins(marginLeft + "px", marginBottom + "px");
            }
    }



    createHealthTable(){
        return new HealthScore(this.mainDiv);
    }

    createGameScore(){
        let score = new GameScore(this.mainDiv, "Test text");
        score.setMargins();
        return score;
    }


}




