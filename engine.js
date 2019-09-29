/*
* создать хелс, передать инстанс хелстейбл,
* *переименовать ган в енджайн +
наследоваться от демеджейбла +
*
*
*
*
*
* */
class Engine extends BaseDamagable {


    bullets = 6;
    size = 300;
    isLoading = false;
    health = 100;
    healthTable;



    constructor(mainDiv, dictionary,tag,healthTable) {
        super(mainDiv, dictionary,tag);
        this.healthTable = healthTable;
        this.div.style.width = this.size - 50 + "px";
        this.div.style.height = this.size + "px";
    }

    createChildDiv() {

        let arm = document.createElement("div");
            arm.style.display = "inlineBlock";
            arm.style.backgroundImage = "url('images/Arm1.png')";
            arm.style.position = "fixed";
            arm.style.backgroundSize = "contain";
            arm.style.backgroundPosition = "center";
            arm.style.backgroundRepeat = "no-repeat";
        return arm;
    }

    setMargins(screenSize) {
        this.div.style.bottom = "-80px";
        this.div.style.left = (screenSize / 2) - (this.size / 2) + "px";
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
                   this.changeHealthValue(this.health -= 20);
                }


                AudioHelper.playShot();
                this.bullets -= 1
            }else{
                AudioHelper.playEmptyGun();
            }

        };
    }

    changeHealthValue(value){

        if(value < 0){
            this.health = 0;
        } else if(value > 100){
            this.health = 100;
        }else {
            this.health = value;
        }

        this.healthTable.setHealthValue(value);
    }

    preparedReloadGun(){

        document.onkeypress = (ev) => {

                if (ev.code === "KeyR" && this.isLoading === false) {
                    this.isLoading = true;
                    this.gunDisappearAnimation(this.size, this.div,this.bullets);
                    setTimeout(()=> {
                        this.bullets = 6;
                        this.gunAppearAnimation(this.size, this.div, this.isLoading);
                        this.isLoading = false;
                    }, 5000);
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
                        AudioHelper.playReload();
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
        this.changeHealthValue(this.health -= 10);
    }
}




