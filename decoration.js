

//draw moon
class Moon extends BaseDamagable{

    image = ["url('images/Moon.png')", "url('images/Half-Moon-PNG-Pic.png')"];

    constructor(mainDiv, dictionary,tag){
        super(mainDiv, dictionary,tag);
        this.div.style.backgroundImage = this.image[0];
    }

    setMargins(topMargin, rightMargin){
        this.div.style.top = topMargin;
        this.div.style.right = rightMargin;
    }


    createChildDiv(){
        let size = 200;
        let moon = document.createElement("div");
            moon.style.width = size + "px";
            moon.style.height =  size + "px";
            moon.style.display = "inlineBlock";
            moon.style.position = "fixed";
            moon.style.backgroundSize = "contain";
            moon.style.backgroundPosition = "center";
            moon.style.backgroundRepeat = "no-repeat";

        return moon;
    }


    destroyedDiv() {
        this.div.style.backgroundImage = this.image[1];
    }
}

class Cactus extends BaseDamagable{

    image = [ "url('images/cact1.png')", "url('images/cact1Broken.png')"];

    constructor(mainDiv, dictionary,tag){
        super(mainDiv, dictionary,tag);
        this.div.style.backgroundImage = this.image[0];
        this.div.style.borderStyle = "dashed";
        this.div.style.borderWidth = 10 + "px";
    }

    setMargins(leftMargin, bottomMargin){
        this.div.style.bottom = bottomMargin;
        this.div.style.left = leftMargin;
    }

    createChildDiv(){
        let size = 300;
        let cactus = document.createElement('div');
            cactus.style.width = size + "px";
            cactus.style.height = size + "px";
            cactus.style.display = "inlineBlock";
            cactus.style.position = "fixed";
            cactus.style.backgroundSize = "contain";
            cactus.style.backgroundPosition = "bottom";
            cactus.style.backgroundRepeat = "no-repeat";

        return cactus;
    }

    destroyedDiv() {
        this.div.style.backgroundImage = this.image[1];
    }

}






