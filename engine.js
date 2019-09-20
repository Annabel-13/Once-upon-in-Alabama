
class Gun extends Decoration{


    bullets = 6;
    size = 300;


    constructor(mainDiv){
        super(mainDiv);
        this.div.style.width = this.size + "px";
        this.div.style.height = this.size + "px";
    }

    createChildDiv(){

        let arm = document.createElement("div");
            arm.style.display = "inlineBlock";
            arm.style.backgroundImage = "url('images/Arm.png')";
            arm.style.position = "fixed";
            arm.style.backgroundSize = "contain";
            arm.style.backgroundPosition = "center";
            arm.style.backgroundRepeat = "no-repeat";

        return arm;
    }

    setMargins(screenSize){
        this.div.style.bottom =  "-10px";
        this.div.style.left = (screenSize / 2) - (this.size / 2) + "px";
    }

    moveGun(document, screenWidht){
        document.addEventListener("mousemove",onMouseUpdate,false);
        document.addEventListener("mouseenter",onMouseUpdate,false);

        let currentDiv = this.div;

        function onMouseUpdate(ev){
            let offset = ev.pageX - (screenWidht / 2) + 170;
            currentDiv.style.transform = 'translateX('+offset+'px)';
        }
    }

    preparedGun(){

        let current = this.bullets;

        document.onclick = function(ev){

            current > 0 ? AudioHelper.playShot() : AudioHelper.playEmptyGun();
            current = current > 0 ? current-=1 : current;

        };
    }



    preparedReloadGun(){

        let current = this.bullets;

        document.onkeypress = function(ev){

            console.log(ev.code);

            if(ev.code === "KeyR"){

                AudioHelper.playReload();
                current === 6;
            }
        };
    }
}

class Damage extends Decoration{

    constructor(mainDiv){
        super(mainDiv)
    }

    setMargins(topMargin, rightMargin){
        this.div.style.top = topMargin;
        this.div.style.right = rightMargin;
    }


    createChildDiv(){

        let dict = {};

    }
}


