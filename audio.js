class AudioHelper {

    static playGunShot(){

        var audio = new Audio();
            audio.src = 'sounds/shot.mp3';
            audio.load();
            audio.play();

    }
}