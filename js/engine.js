class Engine extends BaseDamagable {


    bullets = 6;
    isLoading = false;
    health = 100;
    healthTable;



    constructor(mainDiv, dictionary,tag,healthTable) {
        super(mainDiv, dictionary,tag);
        this.healthTable = healthTable;
    }

    createChildDiv() {
        let arm = document.createElement("div");
            arm.classList.add("engine");
        return arm;
    }

    setMargins(screenSize) {
        this.div.style.left = (screenSize / 2) - (this.div.clientWidth / 2) + "px";
    }

    moveGun(document) {

        let onMouseUpdate = (ev) => {
            this.div.style.left = ev.pageX + 70 + "px";
        };

        document.addEventListener("mousemove", onMouseUpdate, false);
        document.addEventListener("mouseenter", onMouseUpdate, false);
    };

    preparedGun(dictionary) {

        document.onclick = (ev) => {

            if(this.bullets > 0){
                let key = ev.target.tag;

                if(key !== undefined){
                   dictionary[key].didDamage();
                }

                if(key === "fantom"){
                    let newValue = this.health === 0 ? 0 : this.health - 10;
                    this.changeHealthValue(newValue);
                }


                AudioHelper.getInstance().playShot();
                this.bullets -= 1
            }else{
                AudioHelper.getInstance().playEmptyGun();
            }

        };
    }

    changeHealthValue(value){

        this.health = value < 0 ? 0 : value > 100 ? 100 : value;
        this.healthTable.setHealthValue(this.health);

        if(this.health < 1){this.sendEventDie();}
    }

    preparedReloadGun(){

        document.onkeypress = (ev) => {

                if (ev.code === "KeyR" && this.isLoading === false) {
                    this.isLoading = true;
                    this.gunDisappearAnimation(this.div.clientWidth * 2, this.div,this.bullets);
                    setTimeout(()=> {
                        this.bullets = 6;
                        this.gunAppearAnimation(this.div.clientWidth, this.div, this.isLoading);
                        this.isLoading = false;
                    }, 2000);
                }
        }
    }

   gunDisappearAnimation(size,div,bullets){

        if(bullets < 1){

                let currentSize = 0;

                let id = setInterval(function () {
                    if(currentSize > -size){
                        currentSize -= 5;
                        div.style.bottom = currentSize + "px";
                    }else {
                        AudioHelper.getInstance().playReload();
                        clearInterval(id);
                    }
                }, 5);
        }
    }

    gunAppearAnimation(size,div){

            let currentSize = -size;

            let id = setInterval(function () {
                if(currentSize < 0){
                    currentSize += 5;
                    div.style.bottom =  currentSize - 20 + "px";
                }else {
                    clearInterval(id);
                }
            }, 5);

    }

    didDamage() {
        let newValue = this.health === 0 ? 0 : this.health - 10;
        this.changeHealthValue(newValue);
    }

    sendEventDie(){

        let myEvent = new CustomEvent("dieGamer", {
            detail: {
                tag: this.div.tag
            }
        });
        document.dispatchEvent(myEvent);
    }
}




