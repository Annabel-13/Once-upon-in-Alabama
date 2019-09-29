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
        this.div.style.backgroundImage = "url('images/gravestone.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
        this.div.style.bottom = -20 + "px";
        AudioHelper.getInstance().playDie();
    }

}