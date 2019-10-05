
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";


    let dictionary = {};

    let mainDiv =  Panorama.createMainDiv();
    let fantom = new Fantom(mainDiv, dictionary, "fantom");
        fantom.setMargins("50px", "50px");

    let score = new GameScore(mainDiv, "Test text");
        score.setMargins();


    let enemies = [
        new DrunkJoy(mainDiv,dictionary,"drunker1"),
        new DrunkBill(mainDiv,dictionary,"drunker2"),
        new DrunkPhill(mainDiv,dictionary,"drunker3")
    ];

    let enemiesCount = enemies.length;

        createCactus(window.innerHeight / 10, mainDiv, dictionary);

        appearTarget(mainDiv, dictionary, "gun",new HealthScore(mainDiv));

        document.body.append(mainDiv);




        score.showTable("Click on Enter to start game!");


        document.addEventListener("dieEnemy", function(e) {
            enemiesCount -=1;
            if(enemiesCount < 1){
                score.showTable("all enemies is died");
                AudioHelper.getInstance().playScore();
            }
        });

        document.addEventListener("dieGamer", function(e) {
            enemies.forEach((element) => {element.didGameFinish()});
            score.showTable("gamer died");
            AudioHelper.getInstance().playScore();
        });

        document.addEventListener("startGame", function(e) {
            score.hideTable();
            enemies.forEach((enemy) => {enemy.startUp(100);});
        });
});






