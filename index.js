
/*
    this is enter point
*/
document.addEventListener("DOMContentLoaded", function() {
document.body.style.cursor = "url('images/smallTarget.png'), auto";

    let dictionary = {};

    let mainDiv = new Panorama().createMainDiv();
    let fantom = new Fantom(mainDiv, dictionary, "fantom");
        fantom.setMargins("50px", "50px");

    let score = new GameScore(mainDiv, "You win!");
    let border = score.height / 10;
    let scoreHeight = score.height + border;
        score.setMargins(0 + "px", (window.innerHeight - scoreHeight) + "px");
        score.showTable();


        let enemies1 = new DrunkJoy(mainDiv,dictionary,"drunker1");
        let enemies2 = new DrunkBill(mainDiv,dictionary,"drunker2");
        let enemies3 = new DrunkPhill(mainDiv,dictionary,"drunker3");


        createCactus(window.innerHeight / 10, mainDiv, dictionary);



        appearTarget(mainDiv, dictionary, "gun",new HealthScore(mainDiv));



    document.body.append(mainDiv);

});



function createCactus(maxValue, mainDiv, dictionary) {

        let offset = 10;

    for(i = 1; i< 10; i++){

        let size = 300;
        let marginBottom = getRandValue(offset, maxValue - (2 * offset));
        let marginLeft = getRandValue(0, window.innerWidth - size);

        let cactus = new Cactus(mainDiv, dictionary, "cactus"+ i);
        cactus.setMargins(marginLeft + "px", marginBottom + "px");



}}

function appearTarget(mainDiv, dictionary,tag, healthTable){
    let engine = new Engine(mainDiv, dictionary, tag, healthTable);
    console.log(tag);
        engine.setMargins(window.innerWidth);
        engine.moveGun(document);
        engine.preparedGun(dictionary);
        engine.preparedReloadGun();
}


function getRandValue(minValue, maxValue) {
   return  Math.floor(Math.random() * maxValue) + minValue;
}

