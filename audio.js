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

    static playScore(){
        this.play('sounds/dikiyZapad.mp3');
    }

    static playDie(){
        this.play('sounds/simpsndoh.mp3');
    }
    static playDamageEnemy(){
        this.play('sounds/ahhh.mp3');
    }
}