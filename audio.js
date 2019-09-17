class AudioHelper {

    static playGunShot(){

        let audio = new Audio();
            audio.src = 'sounds/shot.mp3';
            audio.load();
            audio.play();

    }
}