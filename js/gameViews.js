

class GameScore extends BaseDecoration{


    constructor(mainDiv, text) {
        super(mainDiv);
        this.div.innerText = text;
    }

    setMargins(){
        this.div.style.bottom = (window.innerHeight/ 2) - 100 + "px";
        this.div.style.left =  (window.innerWidth / 2) - 200 + "px";
    }


    //этот метод создает див и возвращает
    createChildDiv() {
        let div = document.createElement('div');
            div.classList.add("gameScore");
        return div;
    }

    //здесь мы должны создать табличку, она выплывет на середину и заиграет музыка
   showTable(text){
        this.div.innerText = text;
        this.scoreAppearAnimation();
    }


    hideTable(){
        this.div.style.opacity = 0;
    }

    scoreAppearAnimation(){

        let opacity =  Number(this.div.style.opacity);

        let id = setInterval(() => {
            if(opacity < 10){
                opacity += 1;
                this.div.style.opacity = opacity / 10;
            }else {
                clearInterval(id);
            }
        }, 100);

    }




}


//getGroundHeight = () => { return window.innerHeight / 10; };
class Panorama {

    panoramaBackgroundColor;
    panoramaBackgroundImage;
    groundColor;
    groundOpacity;

    constructor(panoramaBackgroundColor, panoramaBackgroundImage, groundColor,groundOpacity){
        this.groundColor = groundColor;
        this.groundOpacity = groundOpacity;
        this.panoramaBackgroundImage = panoramaBackgroundImage;
        this.panoramaBackgroundColor = panoramaBackgroundColor;
    }

    createMainDiv() {
        let ground = document.createElement('div');
            ground.classList.add("ground");
            ground.style.backgroundColor = this.groundColor;

        let mainDiv = document.createElement('div');
            mainDiv.classList.add("panorama");
            mainDiv.appendChild(ground);
            mainDiv.style.backgroundColor = this.panoramaBackgroundColor;
            mainDiv.style.backgroundImage = this.panoramaBackgroundImage;
        return mainDiv;
    }
}

class HealthScore extends BaseDecoration{


    maxHealthValue = 100;
    textDiv;
    contentDiv;

    constructor(mainDiv) {
        super(mainDiv);

        this.textDiv = document.createElement('div');
        this.textDiv.classList.add("healthScore-textDiv");
        this.textDiv.innerText = this.maxHealthValue + "%";

        this.contentDiv = document.createElement('div');
        this.contentDiv.classList.add("healthScore-contentDiv");

        this.div.append(this.contentDiv);
        this.div.append(this.textDiv);
    }


    createChildDiv(){
        let healthScore = document.createElement('div');
            healthScore.classList.add("healthScore");
        return healthScore;

    }



    setHealthValue(currentHealthValue){
        this.textDiv.innerText = currentHealthValue + "%";
        this.contentDiv.style.width =  currentHealthValue * (300 / this.maxHealthValue) + "px";
        this.contentDiv.style.backgroundColor = currentHealthValue > 50 ? "#0ba754": currentHealthValue > 33 ? "#f8ef48" : "#f83837";
    }


}

class Arm extends BaseDamagable{




    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
    }

    createChildDiv() {
        let arm = document.createElement("div");
            arm.classList.add("engine");
        return arm;
    }

    setMargins(screenSize) {
        this.div.style.left = (screenSize / 2) - (this.div.clientWidth / 2) + "px";
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

    didDamage(){}

}

