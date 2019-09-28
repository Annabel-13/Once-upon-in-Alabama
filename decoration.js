

//draw moon
class Fantom extends BaseDamagable{

    health = 100;
    image = ["url('images/bird.png')", "url('images/bat.png')"];

    constructor(mainDiv, dictionary,tag,){
        super(mainDiv, dictionary,tag);
        this.div.style.backgroundImage = this.image[0];
    }

    setMargins(topMargin, rightMargin){
        this.div.style.top = topMargin;
        this.div.style.right = rightMargin;
    }


    createChildDiv(){
        let size = 200;
        let fantom = document.createElement("div");
            fantom.style.width = size + "px";
            fantom.style.height =  size + "px";
            fantom.style.display = "inlineBlock";
            fantom.style.position = "fixed";
            fantom.style.backgroundSize = "contain";
            fantom.style.backgroundPosition = "center";
            fantom.style.backgroundRepeat = "no-repeat";

        return fantom;
    }


    destroyedDiv() {
        if( this.div.style.backgroundImage = this.image[1]){
            this.health = this.health / 2;
        }

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






