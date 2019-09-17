
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";


    let mainDiv = new Panorama().createMainDiv();
    let moon = new MoonTool(mainDiv);
        moon.setMargins("50px", "50px");

    // let scoreTable = new GameScore(mainDiv, "500$");

        createCactus(window.innerHeight / 10, mainDiv);
        appearTarget(mainDiv);


    document.body.append(mainDiv);

});





function createCactus(maxValue, mainDiv) {
console.log(maxValue);
    let offset = 10;

    for(i = 1; i< 10; i++){

        let size = 300;
        let marginBottom = getRandValue(offset, maxValue - (2 * offset));
        let marginLeft = getRandValue(0, window.innerWidth - size);

        let cactus = new Cactus(mainDiv);
            cactus.setMargins(marginLeft + "px", marginBottom + "px");
    }
}

function appearTarget(mainDiv){
    let gun = new Gun(mainDiv);
        gun.setMargins(window.innerWidth);
        gun.moveGun(document, window.innerWidth);
        gun.preparedGun();
}

function getRandValue(minValue, maxValue) {
   return  Math.floor(Math.random() * maxValue) + minValue;
}