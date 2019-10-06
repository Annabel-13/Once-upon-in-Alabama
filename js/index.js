
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";


    let engine = new Engine();
        engine.observeMouseOver();
        engine.observeOnclick();
        engine.observeKeypress();

    let enemiesCount = 0;





    let mondayLevel = new LevelMonday();

    let mainDiv = mondayLevel.getMainDiv();

        mondayLevel.createFantom();
    let scoreTable = mondayLevel.createGameScore();

     let enemies = mondayLevel.getEnemies();
         enemiesCount = enemies.length;

         mondayLevel.createDecoration();

    let arm = mondayLevel.createArm();

        engine.setArmDiv(arm);

        engine.setHealthTable(mondayLevel.createHealthTable());

        scoreTable.showTable("Click on Enter to start game!");



        document.body.append(mainDiv);



        document.addEventListener("dieEnemy", function(e) {
            enemiesCount -=1;
            if(enemiesCount < 1){
                 scoreTable.showTable("all enemies is died");
                 AudioHelper.getInstance().playScore();
             }
         });

         document.addEventListener("dieGamer", function(e) {
             arm.div.style.opacity = 0;
             enemies.forEach((element) => {element.didGameFinish()});
             scoreTable.showTable("gamer died");
            AudioHelper.getInstance().playScore();
         });

         document.addEventListener("startGame", function(e) {
             scoreTable.hideTable();
             enemies.forEach((enemy) => {enemy.startUp(100);});
         });

        document.addEventListener("gamerWasDamaged", function(e) {
            engine.didDamage();
        });
});






