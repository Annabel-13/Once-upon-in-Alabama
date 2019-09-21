
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";

    let dictionary = {};

    let mainDiv = new Panorama().createMainDiv();
    let moon = new Moon(mainDiv, dictionary, "moon");
        moon.setMargins("50px", "50px");

    let score = new GameScore(mainDiv, "500");
    let border = score.height / 10;
    let scoreHeight = score.height + border;
        score.setMargins(0 + "px", (window.innerHeight - scoreHeight) + "px");
        score.showTable();

        let healthScore = new HealthScore(mainDiv);

        //createCactus(window.innerHeight / 10, mainDiv, dictionary);
        appearTarget(mainDiv, dictionary, score);


        let currentValue = 0;
        let id = setInterval(function () {

            if(currentValue < 100){
                currentValue += 1;
                healthScore.setHealthValue(currentValue);
            }else {
                clearInterval(id);
            }
        }, 200);



    document.body.append(mainDiv);

});



function createCactus(maxValue, mainDiv, dictionary) {

    let offset = 10;

    for(i = 1; i< 5; i++){

        let size = 300;
        let marginBottom = getRandValue(offset, maxValue - (2 * offset));
        let marginLeft = getRandValue(0, window.innerWidth - size);

        let cactus = new Cactus(mainDiv, dictionary, "cactus"+i);
            cactus.setMargins(marginLeft + "px", marginBottom + "px");
    }
}

function appearTarget(mainDiv, dictionary,score){
    let gun = new Gun(mainDiv);
        gun.setMargins(window.innerWidth);
        gun.moveGun(document);
        gun.preparedGun(dictionary,score);
        gun.preparedReloadGun();
}



function getRandValue(minValue, maxValue) {
   return  Math.floor(Math.random() * maxValue) + minValue;
}

