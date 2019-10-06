
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";


    let engine = new Engine();

    let mondayLevel = new LevelMonday();
    let gameManager = new GameManager(mondayLevel);


        engine.setArmDiv(gameManager.arm);
        engine.setHealthTable(gameManager.healthTable);

        gameManager.startGame();


});






