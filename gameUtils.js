

class GameScore extends BaseDecoration{

    height = 200;
    colors = [
        "#8f48af",
        "#f9f6ff",
        "#d89548",
        "#8d4731",
        "#000000"];
    text = "";
    borderStyle = "dashed";


    constructor(mainDiv, text) {
        super(mainDiv);
        this.text = text;
        this.div.style.backgroundColor = this.colors[2];
        this.div.style.color = this.colors[1];
        this.div.style.border = this.colors[3];
        this.div.style.bottom = (window.innerHeight / 2) - (this.height / 2) + "px" ;
        this.div.style.left = (window.innerWidth / 2) - this.height + "px";
        this.div.style.lineHeight = this.height + 'px';
        this.div.style.borderStyle = this.borderStyle;
        this.div.style.fontSize = this.height / 2 + "px";
        this.div.style.borderWidth = this.height / 20 + "px";
        this.div.innerText = this.text;
        this.div.style.width = this.height * 2 + "px";
        this.div.style.height = this.height + "px";
        this.div.style.opacity = 0;
    }

    setMargins(leftMargin, bottomMargin){
        this.div.style.bottom = bottomMargin;
        this.div.style.left = leftMargin;
    }


    //этот метод создает див и возвращает
    createChildDiv() {
        let div = document.createElement('div');
            div.style.position = "fixed";
            div.style.textAlign = "center";
            div.style.fontFamily = "ryo";
        return div;
    }

    //здесь мы должны создать табличку, она выплывет на середину и заиграет музыка

    showTable(){
        this.annFadeIn();
    }

    annFadeIn(){

        let currentOpacityValue = 0;
        let currentDiv = this.div;

        let id = setInterval(function () {
            currentDiv.style.opacity = currentOpacityValue / 10;
            currentOpacityValue < 10 ? currentOpacityValue +=1: clearInterval(id);
        }, 80);

    };


    annFadeOut(){

        let currentOpacityValue = 10;
        let currentDiv = this.div;

        let id = setInterval(function () {
            currentDiv.style.opacity = currentOpacityValue / 10;
            currentOpacityValue > 0 ? currentOpacityValue -=1: clearInterval(id);
        }, 80);

    };

    setText(text){
        this.div.innerText = text;
    }


}


//getGroundHeight = () => { return window.innerHeight / 10; };
class Panorama {


    colors = [
        "#8f48af",
        "#8b4a46"
    ];


    createMainDiv() {
        let mainDiv = document.createElement('div');
            mainDiv.style.width = window.innerWidth + "px";
            mainDiv.style.height = window.innerHeight + "px";
            mainDiv.style.backgroundColor = this.colors[0];
            mainDiv.style.top = 0;
            mainDiv.style.left = 0;
            mainDiv.style.position = "fixed";
            mainDiv.appendChild(this.createGround());
        return mainDiv;
    }


    createGround(){
        let ground = document.createElement('div');
            ground.style.width = window.innerWidth + "px";
            ground.style.height = window.innerHeight / 10 + "px";
            ground.style.backgroundColor = this.colors[1];
            ground.style.bottom = 0;
            ground.style.position = "fixed";
        return ground;
    }
}

class HealthScore extends BaseDecoration{

    height = 50;
    width = 300;
    maxHealthValue = 100;
    textDiv;
    contentDiv;

    constructor(mainDiv) {
        super(mainDiv);
        this.div.style.width = this.width + "px";
        this.div.style.height =  this.height + "px";
        this.div.style.fontSize = this.height / 2 + "px";
        this.div.style.lineHeight = this.height + 'px';
        this.textDiv = this.createTextDiv();
        this.contentDiv = this.createContentDiv();
        this.div.append(this.contentDiv);
        this.div.append(this.textDiv);
    }

     createContentDiv(){
         let contentDiv = document.createElement('div');
             contentDiv.style.bottom = window.innerHeight / 10 + 20 + "px";
             contentDiv.style.width = this.div.style.width;
             contentDiv.style.height = this.div.style.height;
             contentDiv.style.position = "fixed";
             contentDiv.style.backgroundColor = "#f8ef48";
             contentDiv.style.opacity = 0.6;
             contentDiv.style.borderRadius = "33px";
        return contentDiv;

    }

    createTextDiv(){
        let textDiv = document.createElement('div');
            textDiv.style.bottom = window.innerHeight / 10 + 20 + "px";
            textDiv.style.width = this.div.style.width;
            textDiv.style.height = this.div.style.height;
            textDiv.style.position = "fixed";
            textDiv.innerText = "100%";
            textDiv.style.borderRadius = "33px";
        return textDiv;

    }

    createChildDiv(){
        let healthScore = document.createElement('div');
            healthScore.style.bottom = window.innerHeight / 10 + 10 + "px";
            healthScore.style.right = 10 + "px";
            healthScore.style.position = "fixed";
            healthScore.style.borderStyle = "groove";
            healthScore.style.borderWidth = 10 + "px";
            healthScore.style.borderColor = "#f83837";
            healthScore.style.textAlign = "center";
            healthScore.style.fontFamily = "ryo";
            healthScore.style.borderRadius = "33px";
        return healthScore;

    }



    setHealthValue(currentHealthValue){
        let personHealthValue = (this.maxHealthValue - currentHealthValue);
        this.textDiv.innerText = personHealthValue + "%";
        this.contentDiv.style.width = this.width - currentHealthValue * (this.width / this.maxHealthValue) + "px";
        this.contentDiv.style.backgroundColor = personHealthValue > 50 ? "#0ba754": personHealthValue > 33 ? "#f8ef48" : "#f83837";
    }


}

