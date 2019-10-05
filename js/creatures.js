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

    lookRunning(){
        this.div.style.backgroundImage = "url('images/Joy.png')";
    }

    lookWaiting(){
        this.div.style.backgroundImage = "url('images/Joy.png')";
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

    onDamage() {
        AudioHelper.getInstance().playDamageEnemy();
        console.log(this.enemyHealth);
    }

    lookWaiting(){
        this.div.style.backgroundImage = "url('images/bill.png')";
    }

    lookRunning(){
        this.div.style.backgroundImage = "url('images/bill.png')";
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


    lookRunning(){
        this.div.style.backgroundImage = "url('images/phill.png')";
    }

    lookWaiting(){
        this.div.style.backgroundImage = "url('images/phill.png')";
    }


    onDie(){
        AudioHelper.getInstance().playDie();
    }

}