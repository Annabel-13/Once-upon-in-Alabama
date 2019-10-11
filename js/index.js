
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";


    let engine = new Engine();

    /*let mondayLevel = new LevelMonday();
    let gameManager = new GameManager(mondayLevel);*/

    let levelTuesday = new LevelTuesday();
    let gameManager = new GameManager(levelTuesday);


        engine.setArmDiv(gameManager.arm);
        engine.setHealthTable(gameManager.healthTable);

        gameManager.startGame();


});






