

//draw bat
class Fantom extends BaseDamagable{

    health = 100;
    image = ["url('images/bird.png')", "url('images/bat.png')"];

    constructor(mainDiv, dictionary){
        super(mainDiv, dictionary,"fantom");
        this.div.style.backgroundImage = this.image[0];
    }

    setMargins(topMargin, rightMargin){
        this.div.style.top = topMargin;
        this.div.style.right = rightMargin;
    }


    createChildDiv(){
        let fantom = document.createElement("div");
            fantom.classList.add("fantom");
        return fantom;
    }


    didDamage() {
        this.div.style.backgroundImage = this.image[1]
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
        let cactus = document.createElement('div');
            cactus.classList.add("cactus");
        return cactus;
    }

    didDamage() {
        this.div.style.backgroundImage = this.image[1];
    }

}






