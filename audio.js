class AudioHelper {

    static play(sound){
        let audio = new Audio();
            audio.src = sound;
            audio.load();
            audio.play();

    }

    static playEmptyGun(){
        this.play('sounds/gunEmpty.mp3');
    }

    static playShot(){
        this.play('sounds/shot.mp3');
    }

    static playReload(){
        this.play('sounds/reload.mp3');
    }
}