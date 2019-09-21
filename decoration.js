

//draw moon
class MoonTool extends BaseDamagable{

    constructor(mainDiv){
        super(mainDiv)
    }

    setMargins(topMargin, rightMargin){
        this.div.style.top = topMargin;
        this.div.style.right = rightMargin;
    }


    createChildDiv(){
        let size = 200;
        let image = ["url('images/Moon.png')", "url('images/Half-Moon-PNG-Pic.png')"];
        let moon = document.createElement("div");
            moon.id = Date.now();
            moon.style.width = size + "px";
            moon.style.height =  size + "px";
            moon.style.display = "inlineBlock";
            moon.style.backgroundImage = image[0];
            moon.style.position = "fixed";

            moon.style.backgroundSize = "contain";
            moon.style.backgroundPosition = "center";
            moon.style.backgroundRepeat = "no-repeat";

        return moon;
    }


    destroyedDiv(image) {
        this.div.style.backgroundImage = image[1];

    }
}

class Cactus extends BaseDamagable{



    constructor(mainDiv){
        super(mainDiv)
    }

    setMargins(leftMargin, bottomMargin){
        this.div.style.bottom = bottomMargin;
        this.div.style.left = leftMargin;
    }

    createChildDiv(){
        let size = 300;
        let image = [ "url('images/cact1.png')", "url('images/cact2.png')"];
        let cactus = document.createElement('div');
            cactus.id = Date.now();
            cactus.style.width = size + "px";
            cactus.style.height = size + "px";
            cactus.style.display = "inlineBlock";
            cactus.style.backgroundImage = image[0];
            cactus.style.position = "fixed";

            cactus.style.backgroundSize = "contain";
            cactus.style.backgroundPosition = "bottom";
            cactus.style.backgroundRepeat = "no-repeat";

        return cactus;
    }

    destroyedDiv(image) {
        this.div.style.backgroundImage = image[1];

    }

}






