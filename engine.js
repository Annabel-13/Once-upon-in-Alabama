
class Gun extends BaseDecoration {


    bullets = 6;
    size = 300;

    constructor(mainDiv) {
        super(mainDiv);
        this.div.style.width = this.size + "px";
        this.div.style.height = this.size + "px";
    }

    createChildDiv() {

        let arm = document.createElement("div");
        arm.style.display = "inlineBlock";
        arm.style.backgroundImage = "url('images/Arm.png')";
        arm.style.position = "fixed";
        arm.style.backgroundSize = "contain";
        arm.style.backgroundPosition = "center";
        arm.style.backgroundRepeat = "no-repeat";

        return arm;
    }

    setMargins(screenSize) {
        this.div.style.bottom = "-10px";
        this.div.style.left = (screenSize / 2) - (this.size / 2) + "px";
    }

    moveGun(document) {

        let onMouseUpdate = (ev) => {
            this.div.style.left = ev.pageX + "px";
        };

        document.addEventListener("mousemove", onMouseUpdate, false);
        document.addEventListener("mouseenter", onMouseUpdate, false);
    };

    preparedGun(dictionary,score) {

        document.onclick = (ev) => {

            if(this.bullets > 0){
                let key = ev.target.tag;

                score.setText(key);

                if(key !== undefined){
                    let value = dictionary[key];
                        value.destroyedDiv();
                }

                AudioHelper.playShot();
                this.bullets -= 1
            }else{
                AudioHelper.playEmptyGun();
            }

        };
    }

    preparedReloadGun(){

        document.onkeypress = (ev) => {

                if (ev.code === "KeyR") {
                    this.gunDisappearAnimation(this.size, this.div,this.bullets);
                    setTimeout(()=> {
                        this.bullets = 6;
                        this.gunAppearAnimation(this.size, this.div);
                    }, 5000);
                }
        }
    }

   gunDisappearAnimation(size,div,bullets){

        if(bullets < 1){

                let currentSize = 0;

                let id = setInterval(function () {
                    if(currentSize > -size){
                        currentSize -= 1;
                        div.style.bottom = currentSize + "px";
                    }else {
                        AudioHelper.playReload();
                        clearInterval(id);
                    }
                }, 3);
        }
    }

    gunAppearAnimation(size,div){

            let currentSize = -size;

            let id = setInterval(function () {
                if(currentSize < 0){
                    currentSize += 1;
                    div.style.bottom = currentSize + "px";
                }else {
                    clearInterval(id);
                }
            }, 5);

    }
}




