

/*
    this is base decoration classe
    - construct will append each child to panorama
    - create child will create child div
    - setMargin will set position of div
 */

class BaseDecoration {

    div;

    constructor(mainDiv){
        if(mainDiv == null){
            throw new Error("BaseDecoration element have to had MainDiv!");
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


class BaseDamagable extends BaseDecoration{

    constructor(mainDiv, dictionary,tag){
        super(mainDiv);

        if(tag === undefined){
            throw new Error("Child need tag!");
        }

        this.div.tag = tag;
        console.log(tag);
        dictionary[this.div.tag] = this;
    }


    destroyedDiv(){
        throw new Error("ChildDamage should overwrite 'destroyedDiv' ");
    }
}


/*
    @shoot
    @hide
    @metod onReload
    @metod onDamage
    @metod onDie
*/
class BaseEnemy extends BaseDamagable{



    health = 100;
    size = 200;
    bullets = 6;
    positionX = 200;


    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.div.style.width = this.size + "px";
        this.div.style.height = this.size + "px";
        this.div.style.left = this.positionX + "px";
    }

    createChildDiv() {
        let baseEnemy = document.createElement('div');
            baseEnemy.style.backgroundColor = "yellow";
            baseEnemy.style.bottom = 20 + "px";
            baseEnemy.style.position = "fixed";
        return baseEnemy;
    }

    setMargins(screenSize) {
        this.div.style.bottom = "-10px";
        this.div.style.left = (screenSize / 2) - (this.size / 2) + "px";
    }

    startUp(health){

        // let makeShot = this.makeShoot();
        // let makeRun = this.makeRun();
        // let onDie = this.onDie();

        let id = setInterval(function () {

            if(health > 0){
                console.log("test");
                // makeShot();
                // makeRun();
            } else{
                // onDie();
                clearInterval(this);
            }

        },5);


        // do {
        //    /* this.makeShoot();
        //     this.makeRun();*/
        //     console.log("dasdasd");
        // }while (this.health > 0);

    }

    makeShoot(){
        if(this.bullets > 0){
            let shootingCount = getRandValue(1, this.bullets);
            AudioHelper.playShot();
            this.bullets -= shootingCount
        }else{
            AudioHelper.playEmptyGun();
        }
    }

    makeRun(){

        let distance = getRandValue(window.innerWidth / 5, window.innerWidth / 2);
        let currentPosition = this.positionX;
        let direction = getRandValue(0, 1);
        let path = 5;

        let id = setInterval(function () {

            if(distance > 0){
                direction === 0 ? moveLeft(currentPosition, path): moveRight(currentPosition, path);
                distance -= path;
            } else{
                clearInterval(id);
            }

        },5);


        function moveRight(currentPosition, path){

            if(currentPosition + path > window.innerWidth){
                let negativOffset = currentPosition + path - window.innerWidth;
                currentPosition +=  path - negativOffset;
                currentPosition -= negativOffset;
                this.div.style.left = currentPosition + "px";
            }else {
                currentPosition += path;
                this.div.style.left = currentPosition + "px";
            }
        }


        function moveLeft(currentPosition, path){

            if(currentPosition - path < 0){
                let negativOffset = currentPosition - path;
                currentPosition -= negativOffset;
                currentPosition += path - negativOffset;
                this.div.style.left = currentPosition + "px";
            }else {
                currentPosition -= path;
                this.div.style.left = currentPosition + "px";
            }
        }
    }

    destroyedDiv(){
        this.health -= 20;
    }

    onReload(){
        throw new Error("ChildClass should overwrite 'onReload' ");
    }

    onDamage(){
        throw new Error("ChildClass should overwrite 'onDamage' ");
    }

    onDie(){
        throw new Error("ChildClass should overwrite 'onDie' ");
    }
}