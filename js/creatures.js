class DrunkJoy extends BaseEnemy{

    accuracy = 1000;

    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
    }


    onReload(){
       AudioHelper.getInstance().playReload();
    }

    onDamage(){
        AudioHelper.getInstance().playDamageEnemy();
    }


    onDie(){
        this.div.style.backgroundImage = "url('images/graveStone.png')";
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

    accuracy = 300;

    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
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

    accuracy = 100;

    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
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