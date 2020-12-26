class GameManager {


    enemiesCount = 0;
    mainDiv;
    scoreTable;
    enemies;
    arm;
    healthTable;

    constructor(level){
        this.arm = level.createArm();
        this.mainDiv = level.getMainDiv();
        this.enemies = level.getEnemies();
        this.enemiesCount = this.enemies.length;
        this.healthTable = level.createHealthTable();
        this.scoreTable = level.createGameScore();

        level.createFantom();
        level.createDecoration();

        document.body.append(this.mainDiv);
        this.observeGameEvents();
    }

    startGame(){
        this.scoreTable.showTable("Click on Enter to start game!");
    }

    onDieEnemy(){
        this.enemiesCount -=1;
        if(this.enemiesCount < 1){
            this.scoreTable.showTable("all enemies is died");
            AudioHelper.getInstance().playScore();
        }
    }

    onDieGamer(){
        this.arm.div.style.opacity = 0;
        this.enemies.forEach((element) => {element.didGameFinish()});
        this.scoreTable.showTable("gamer died");
        AudioHelper.getInstance().playScore();
    }

    onStartGame(){
        this.scoreTable.hideTable();
        this.enemies.forEach((enemy) => {enemy.startUp(100);});
    }

    observeGameEvents(){
        document.addEventListener("dieEnemy", () => {this.onDieEnemy()});
        document.addEventListener("dieGamer",() => {this.onDieGamer()});
        document.addEventListener("startGame", () => {this.onStartGame()});
    }

}
