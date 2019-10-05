

/*
    this is base decoration class
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

    dictionary;

    constructor(mainDiv, dictionary,tag){
        super(mainDiv);

        if(tag === undefined){
            throw new Error("Child need tag!");
        }

        this.div.tag = tag;
        dictionary[this.div.tag] = this;
        this.dictionary = dictionary;
    }


    didDamage(){
        throw new Error("ChildDamage should overwrite 'didDamage' ");
    }
}


/*
    @shoot
    @hide
    @metod onReload
    @metod onDamage
    @metod onDie
*/
/*
* я наследую ган от демеджэйбла +
* задаю тег гану +
* в бейзэнеми я прописую поиск по тегу гана+
* и беру его ширину + отступы +
* пишу рандом по полученной ширине +
* если энеми попал в рамки от начала нашей ширины до конца, то у нас отничается жизнь
*
* */
class BaseEnemy extends BaseDamagable{



    enemyHealth = 100;
    bullets = 6;
    positionX = getRandValue(window.innerWidth, window.innerWidth / 3);
    path = 8;
    isFinishedRun = true;
    isFinishedShoot = true;
    isFinishedGame = false;
    isOnReload = false;
    id;
    accuracy = 100;


    constructor(mainDiv, dictionary,tag) {
        super(mainDiv, dictionary,tag);
        this.div.style.left = this.positionX + "px";
    }

    createChildDiv() {
        let baseEnemy = document.createElement('div');
            baseEnemy.classList.add("baseEnemy");
        return baseEnemy;
    }

    setMargins(screenSize) {}

    getEngineSize(){
        return this.div.clientWidth ;
    }

    startUp(){
        this.id = setInterval(() => {
            if(this.enemyHealth > 0 && this.isFinishedGame === false){
                this.bullets > 0 ? this.makeShoot() : this.makeReload();
                this.makeRun();
            } else{
                AudioHelper.getInstance().stop();
                this.lookDie();
                this.sendEventDie();
                this.onDie();
                clearInterval(this.id);
            }
        }, 1000);
    }


    makeShoot(){

        if(!this.isFinishedShoot || this.enemyHealth < 1)return;


        this.isFinishedShoot = false;
        let maxBulletsCount = 6;

            let shootingCount = getRandValue(1,maxBulletsCount);

            let id = setInterval(() => {

                if(this.bullets > 0 && this.enemyHealth > 0 && this.isFinishedGame === false){
                    AudioHelper.getInstance().playShotEnemy();
                    let engine = this.dictionary["gun"];

                    let divLeftPosition = engine.div.style.left;
                    let startX = Number(divLeftPosition.substring(0, divLeftPosition.length - 2));
                    let endX = startX + this.getEngineSize();

                    let minRand = startX - this.accuracy;
                    let maxRand = endX + this.accuracy;

                    let shootCoord = getRandValue(minRand, maxRand );

                    if(shootCoord >= startX && shootCoord <= startX + this.getEngineSize()){
                        engine.didDamage();
                    }

                    this.bullets -= 1;
                } else {
                    AudioHelper.getInstance().playEmptyGun();
                }

                if(shootingCount < 1){
                    this.isFinishedShoot = true;
                    clearInterval(id);
                }else{
                    shootingCount -=1;
                }
            }, 1500);
    }

    makeReload(){
        if(this.isOnReload || this.enemyHealth < 1 || this.isFinishedGame === true) return;
            this.isOnReload = true;

        AudioHelper.getInstance().playReloadEnemy();
        setTimeout(()=> {
            this.bullets = 6;
            this.isOnReload = false;
        }, 5000);
    }


    makeRun(){

        if(!this.isFinishedRun || this.enemyHealth < 1) return;
            this.isFinishedRun = false;


        let distance = getRandValue(window.innerWidth / 4, window.innerWidth);
        let direction = getRandValue(0, 1);
        let waitTime = getRandValue(50, 100);

        this.lookRunning();

        let id = setInterval(() => {


            if(distance > 0 && this.enemyHealth > 0 && this.isFinishedGame === false){
                let allowRight = (this.positionX  + this.getEngineSize() + this.path)  < window.innerWidth;
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
            } else if( waitTime > 0 && this.enemyHealth > 0){
                waitTime -= 1;
              this.lookWaiting();
            } else{
                this.isFinishedRun = true;
                clearInterval(id);
            }
        }, 10);
    }



    /*
      * make apeareance of enemy in time of diying
      *
      *
      * it can be overwritten in child
    * */
    lookDie(){
        this.div.style.backgroundImage = "url('images/graveStone.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
        this.div.style.bottom = -20 + "px";
    }

    lookRunning(){
        this.div.style.backgroundImage = "url('images/enemy.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
    }

    lookWaiting(){
        this.div.style.backgroundImage = "url('images/wait.png')";
        this.div.style.backgroundSize = "contain";
        this.div.style.display = "inlineBlock";
        this.div.style.backgroundPosition = "center";
        this.div.style.backgroundRepeat = "no-repeat";
    }


    moveRight(){
            this.positionX += this.path;
            this.div.style.left = this.positionX + "px";
    }

    moveLeft(){
            this.positionX -= this.path;
            this.div.style.left = this.positionX + "px";
    }

    didDamage(){
        if( this.enemyHealth > 0){
            this.enemyHealth -= 20;
            this.onDamage();
        }
    }

    sendEventDie(){

        let myEvent = new CustomEvent("dieEnemy", {
            detail: {
                tag: this.div.tag
            }
        });
        document.dispatchEvent(myEvent);
    }

    didGameFinish(){
        this.isFinishedGame = true;
    }

    onReload(){
        throw new Error("ChildClass should overwrite 'onReload' ");
    }

    onDamage(){
        throw new Error("ChildClass should overwrite 'onDamage' ");
    }

    onDie() {
        throw new Error("ChildClass should overwrite 'onDie' ");
    }


}
