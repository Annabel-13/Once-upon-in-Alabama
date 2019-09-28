class DrunkJoy extends BaseEnemy{



    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.startUp(100);
    }


    onReload(){
       AudioHelper.playReload();
    }

    onDamage(){
       this.div.style.borderColor = "#ff0000";
       this.div.style.borderStyle = "dashed";
       this.div.style.borderWidth = 10 + "px";
    }

    onDie(){
        //this.div.style.backgroundColor = "#000";
        this.div.style.backgroundImage = "url('images/gravestone.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
        this.div.style.bottom = -20 + "px";
        AudioHelper.playDie();
    }

}