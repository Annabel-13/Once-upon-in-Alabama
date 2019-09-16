

class GameScore {

    height = 200;
    colors = [
        "#8f48af",
        "#f9f6ff",
        "#d89548",
        "#8d4731",
        "#000000"];
    text = "";
    borderStyle = "dashed";



    constructor(text) {
        this.text = text;
    }


     fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }

    //этот метод создает див и возвращает
    createGameScore(screenWidth, screenHeight) {
        let div = document.createElement('div');
            div.style.width = this.height * 2 + "px";
            div.style.height = this.height + "px";
            div.style.backgroundColor = this.colors[2];
            div.style.top = (screenHeight / 2) - (this.height / 2) + "px" ;
            div.style.right = (screenWidth / 2) - this.height + "px";
            div.style.position = "fixed";
            /*div.onclick = function (ev) {

                ev.target.call(fade);
                 }*/
            return div;
    }



    /*
       this is function which will decorate
       us div, set border text, etc...
     */
    createText(div){
        div.innerText = this.text;
        div.style.color = this.colors[1];
        div.style.textAlign = "center";
        div.style.lineHeight = this.height + 'px';
        div.style.border = this.colors[3];
        div.style.borderStyle = this.borderStyle;
        div.style.fontSize = this.height / 2 + "px";
        div.style.fontFamily = "fantasy";
        div.style.borderWidth = this.height / 20 + "px";
    }
}

class Panorama {

    colors = [
        "#8f48af",
        "#8b4a46"
    ];


    createBackground() {
        let background = document.createElement('div');
            background.style.width = window.innerWidth + "px";
            background.style.height = window.innerHeight + "px";
            background.style.backgroundColor = this.colors[0];
            background.style.top = 0;
            background.style.left = 0;
            background.style.position = "fixed";
        return background;
    }

    getGroundHeight(){
        return window.innerHeight / 10
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


