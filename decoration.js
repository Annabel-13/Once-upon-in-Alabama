

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

    image = [ "url('images/cact3.png')", "url('images/cact2Broken.png')"];

    constructor(mainDiv, dictionary,tag){
        super(mainDiv, dictionary,tag);
        this.div.style.backgroundImage = this.image[0];
    }

    setMargins(leftMargin, bottomMargin){
        this.div.style.bottom = bottomMargin;
        this.div.style.left = leftMargin;
    }

    createChildDiv(){
        let width = 200;
        let height = 300;
            let cactus = document.createElement('div');
            cactus.style.width = width + "px";
            cactus.style.height = height + "px";
            cactus.style.display = "inline-block";
            cactus.style.position = "fixed";
            cactus.style.backgroundSize = "auto";
            cactus.style.backgroundPosition = "bottom";
            cactus.style.backgroundRepeat = "no-repeat";
            //cactus.style.cssFloat = "left";

        return cactus;
    }

    destroyedDiv() {
        this.div.style.backgroundImage = this.image[1];
    }

}






