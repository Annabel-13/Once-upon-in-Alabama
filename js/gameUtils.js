

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
        AudioHelper.getInstance().playScore();
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

    static createMainDiv() {
        let ground = document.createElement('div');
            ground.classList.add("ground");

        let mainDiv = document.createElement('div');
            mainDiv.classList.add("panorama");
            mainDiv.appendChild(ground);
        return mainDiv;
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
        this.textDiv.innerText = currentHealthValue + "%";
        this.contentDiv.style.width =  currentHealthValue * (this.width / this.maxHealthValue) + "px";
        this.contentDiv.style.backgroundColor = currentHealthValue > 50 ? "#0ba754": currentHealthValue > 33 ? "#f8ef48" : "#f83837";
    }


}

