class DrunkJoy extends BaseEnemy{



    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.startUp(100);
    }


    onReload(){
       AudioHelper.playReload();
    }

    onDamage(){
       this.div.style.backgroundColor = "#ff0000";
    }

    onDie(){
        this.div.style.backgroundColor = "#000";
    }

}