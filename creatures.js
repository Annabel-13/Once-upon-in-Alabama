class DrunkJoy extends BaseEnemy{

    accuracy = 10;

    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.startUp(100);
    }


    onReload(){
       AudioHelper.getInstance().playReload();
    }

    onDamage(){
        AudioHelper.getInstance().playDamageEnemy();
        console.log(this.enemyHealth);
    }


    onDie(){
        this.div.style.backgroundImage = "url('images/graveStone.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
        this.div.style.bottom = -20 + "px";
        AudioHelper.getInstance().playDie();
    }

}

class DrunkBill extends BaseEnemy{

    accuracy = 30;

    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.startUp(100);
    }


    onReload(){
        AudioHelper.getInstance().playReload();
    }

    onDamage(){
        AudioHelper.getInstance().playDamageEnemy();
        console.log(this.enemyHealth);
    }


    onDie(){
        AudioHelper.getInstance().playDie();
    }

}


class DrunkPhill extends BaseEnemy{

    accuracy = 40;

    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.startUp(100);
    }


    onReload(){
        AudioHelper.getInstance().playReload();
    }

    onDamage(){
        AudioHelper.getInstance().playDamageEnemy();
        console.log(this.enemyHealth);
    }


    /*
      * make apeareance of enemy in time of diying
      *
      *
      * it can be overwritten in child
    * */
    lookDie(){
        this.div.style.backgroundImage = "url('images/cact1.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
        this.div.style.bottom = -20 + "px";
    }

    lookRunning(){
        this.div.style.backgroundImage = "url('images/drunkPhill2.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
    }

    lookWaiting(){
        this.div.style.backgroundImage = "url('images/bat.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
    }


    onDie(){
        AudioHelper.getInstance().playDie();
    }

}