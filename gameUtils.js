

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
        this.div.style.top = (window.innerHeight / 2) - (this.height / 2) + "px" ;
        this.div.style.right = (window.innerWidth / 2) - this.height + "px";
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
            div.style.fontFamily = "fantasy";
        return div;
    }

    //здесь мы должны создать табличку, она выплывет на середину и заиграет музыка

   /* showTable(mainDiv){

        document.onkeypress = (ev) => {

            if (ev.code === "KeyS") {
                /!*this.gunDisappearAnimation(this.div);
                AudioHelper.dikiyZapad();*!/
                this.annFadeIn();
            }
        }
    }*/

    annFadeIn(){

        let currentOpacityValue = 0;
        let currentDiv = this.div;

        let id = setInterval(function () {
            currentDiv.style.opacity = currentOpacityValue / 10;
            currentOpacityValue < 10 ? currentOpacityValue +=1: clearInterval(id);
        }, 150);

    };


    annFadeOut(){

        let currentOpacityValue = 10;
        let currentDiv = this.div;

        let id = setInterval(function () {
            currentDiv.style.opacity = currentOpacityValue / 10;
            currentOpacityValue > 0 ? currentOpacityValue -=1: clearInterval(id);
        }, 150);

    };


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


