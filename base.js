

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
    path = 8;
    isFinishedCycle = true;
    id;


    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.div.style.width = this.size + "px";
        this.div.style.height = 2 * this.size + "px";
        this.div.style.left = this.positionX + "px";
    }

    createChildDiv() {
        let baseEnemy = document.createElement('div');
            baseEnemy.style.backgroundColor = "yellow";
            baseEnemy.style.bottom = 20 + "px";
            baseEnemy.style.position = "fixed";
        return baseEnemy;
    }

    setMargins(screenSize) {}

    startUp(){

        this.id = setInterval(() => {
            if(this.health > 0){
                this.makeShoot();
                this.makeRun();
            } else{
                this.onDie();
                clearInterval(this.id);
            }
        }, 1000);
    }

    makeShoot(){

      /*  if(this.bullets > 0){*/
            let shootingCount = getRandValue(1, this.bullets);

            let id = setInterval(() => {

                if(shootingCount > 0){
                    AudioHelper.playShot();
                    shootingCount -= 1;
                }else{
                    AudioHelper.playEmptyGun();
                    clearInterval(id);
                }

            }, 200);


           /* AudioHelper.playShot();
            this.bullets -= shootingCount*/


       /* }else{
            AudioHelper.playEmptyGun();
      }*/
    }

    makeRun(){
        this.div.backgroundColor = "#00ff00";

        if(!this.isFinishedCycle) return;

        this.isFinishedCycle = false;
        let distance = 5000;
        let direction = getRandValue(0, 1);
        let waitTime = getRandValue(50, 100);

        this.div.style.backgroundColor = "#ff0000";

        let id = setInterval(() => {


            if(distance > 0){
                let allowRight = (this.positionX  + this.size + this.path)  < window.innerWidth;
                let allowLeft = (this.positionX - this.path) > 0;



                if(direction === 0 && !allowRight){
                    direction = 1
                } else if(direction === 1 && !allowLeft){
                    direction = 0
                }

                if(direction === 1){
                    this.moveLeft();
                }else if(direction === 0){
                    this.moveRight();
                }


                distance -= this.path;
            } else if( waitTime > 0){
                waitTime -= 1;
                this.div.style.backgroundColor = "#0000ff"
            } else{
                this.isFinishedCycle = true;
                clearInterval(id);
            }
        }, 10);
    }

    moveRight(){

            this.positionX += this.path;
            this.div.style.left = this.positionX + "px";
    }

    moveLeft(){

            this.positionX -= this.path;
            this.div.style.left = this.positionX + "px";
    }

    destroyedDiv(){
        if( this.health > 0){
            this.health -= 20;
        }
    }

    onReload(){
        throw new Error("ChildClass should overwrite 'onReload' ");
    }

    onDamage(){
        throw new Error("ChildClass should overwrite 'onDamage' ");
    }

    onDie() {
//        this.div.style.visibility = "hidden"
        throw new Error("ChildClass should overwrite 'onDie' ");
    }
}
