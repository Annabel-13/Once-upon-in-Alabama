function createCactus(maxValue, mainDiv, dictionary) {

    let offset = 10;

    for(let i = 1; i< 10; i++){

        let size = 300;
        let marginBottom = getRandValue(offset, maxValue - (2 * offset));
        let marginLeft = getRandValue(0, window.innerWidth - size);

        let cactus = new Cactus(mainDiv, dictionary, "cactus"+ i);
        cactus.setMargins(marginLeft + "px", marginBottom + "px");



    }}

function appearTarget(mainDiv, dictionary,tag, healthTable){
    let engine = new Engine(mainDiv, dictionary, tag, healthTable);
    engine.setMargins(window.innerWidth);
    engine.moveGun(document);
    engine.preparedGun(dictionary);
    engine.preparedReloadGun();
}


function getRandValue(minValue, maxValue) {
    return  Math.floor(Math.random() * maxValue) + minValue;
}