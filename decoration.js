

/*
    this is base decoration classe
    - construct will append each child to panorama
    - create child will create child div
    - setMargin will set position of div
 */
class Decoration {

    div;

    constructor(mainDiv){
        if(mainDiv == null){
            throw new Error("Decoration element have to had MainDiv!");
        }
        this.div = this.createChildDiv();
            mainDiv.appendChild(this.div);
    }

    createChildDiv(){
        throw new Error("ChildDecoration should overwrite 'createChildDiv' ");
    }

    setMargins(topMargin, rightMargin){
        throw new Error("ChildDecoration should overwrite 'setMargins' ");
    }

}

//draw moon
class MoonTool extends Decoration {

    constructor(mainDiv){
        super(mainDiv)
    }

    setMargins(topMargin, rightMargin){
        this.div.style.top = topMargin;
        this.div.style.right = rightMargin;
    }


    createChildDiv(){
        let size = 200;
        let moon = document.createElement("div");
            moon.tag = "moon";
            moon.style.width = size + "px";
            moon.style.height =  size + "px";
            moon.style.display = "inlineBlock";
            moon.style.backgroundImage = "url('images/Moon.png')";
            moon.style.position = "fixed";

            moon.style.backgroundSize = "contain";
            moon.style.backgroundPosition = "center";
            moon.style.backgroundRepeat = "no-repeat";

        return moon;
    }


    destroyedHalfMoon(image) {
        this.div.style.backgroundImage = image
    }
}

class Cactus extends Decoration{



    constructor(mainDiv){
        super(mainDiv)
    }

    setMargins(leftMargin, bottomMargin){
        this.div.style.bottom = bottomMargin;
        this.div.style.left = leftMargin;
    }

    createChildDiv(){
        let size = 300;
        let cactusImage = [ "url('images/cact1.png')", "url('images/cact2.png')"];
        let cactus = document.createElement('div');
            cactus.tag = "cact";
            cactus.style.width = size + "px";
            cactus.style.height = size + "px";
            cactus.style.display = "inlineBlock";
            cactus.style.backgroundImage = cactusImage[0];
            cactus.style.position = "fixed";

            cactus.style.backgroundSize = "contain";
            cactus.style.backgroundPosition = "bottom";
            cactus.style.backgroundRepeat = "no-repeat";

        return cactus;
    }

    destroyedHalfCactus(image) {
        this.div.style.backgroundImage = image
    }

}






