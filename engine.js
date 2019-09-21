
class Gun extends BaseDecoration {


    bullets = 6;
    size = 300;
    isShowed = false;

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

    moveGun(document, screenWidht) {
        document.addEventListener("mousemove", onMouseUpdate, false);
        document.addEventListener("mouseenter", onMouseUpdate, false);

        let currentDiv = this.div;

        function onMouseUpdate(ev) {
            let offset = ev.pageX - (screenWidht / 2) + 170;
            currentDiv.style.transform = 'translateX(' + offset + 'px)';
        }
    };

    preparedGun() {

        document.onclick = () => {

            this.bullets > 0 ? AudioHelper.playShot() : AudioHelper.playEmptyGun();
            this.bullets = this.bullets > 0 ? this.bullets -= 1 : this.bullets;
        };
    }

    preparedReloadGun(mainDiv){

        //let scoreTable;

        document.onkeypress = (ev) => {

                if (ev.code === "KeyR") {
                    this.gunDisappearAnimation(this.div);
                    AudioHelper.playReload();
                    //this.bullets += 1;
                }
        }
    }
//пистолет должен исчезать и только тогда перезаряжаться

   gunDisappearAnimation(gun){


        let current = this.bullets;

       let emptyGun = setInterval(function () {
           if (current === 0) {
               clearInterval(emptyGun);
           } else {
               gun.style.transform = 'translateY(' + gun.style.height +1 + 'px)';
           }
       }, 50);

}}




