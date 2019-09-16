
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";




    let fabricPanorama = new Panorama();
    let mainDiv = fabricPanorama.createBackground();
    let ground = fabricPanorama.createGround();

    let moon = new MoonTool(mainDiv);
        moon.setMargins("50px", "50px");

        mainDiv.appendChild(ground);

        createCactus(fabricPanorama.getGroundHeight(), mainDiv);
        appearTarget(mainDiv);


    document.body.append(mainDiv);

});





function createCactus(maxValue, mainDiv) {

    let offset = 10;

    for(i = 1; i< 10; i++){

        let size = 300;
        let marginBottom = getRandValue(offset, maxValue - (2 * offset));
        let marginLeft = getRandValue(0, window.innerWidth - size);

        let topCactus = new CactusTool(mainDiv);
            topCactus.setMargins(marginLeft + "px", marginBottom + "px");
    }
}

function appearTarget(mainDiv){

    let gun = new Gun(mainDiv);
        gun.setMargins(window.innerWidth);
        gun.moveGun(document, window.innerWidth);

    document.onclick = function(ev){
        AudioHelper.playGunShot();
        DamageHelper.makeDamage(ev.target, ev.target.tag);
    };



}

function appeearScoreTable(mainRectungle) {

    let gameScore = new GameScore("500$");
    let scoreTable = gameScore.createGameScore(window.innerWidth, window.innerHeight);
        gameScore.createText(scoreTable);
    mainRectungle.appendChild(scoreTable);
}


function getRandValue(minValue, maxValue) {
   return  Math.floor(Math.random() * maxValue) + minValue;
}