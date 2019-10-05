class AudioHelper {



    static instance;
    audio = new Audio();
    isPlaying = false;

    static getInstance(){
        if(this.instance === undefined){
            this.instance = new AudioHelper();
            this.instance.audio.onplaying = () => {
                this.isPlaying = true;
            };
            this.instance.audio.onpause = () => {
                this.isPlaying = false;
            };
        }

        return this.instance;
    }


    playAudio() {
        if (this.audio.paused && !this.isPlaying) {
            this.audio.play();
        }
    }


    pauseAudio() {
        if (!this.audio.paused && this.isPlaying) {
            this.audio.stop();
        }
    }


    play(sound){
        //this.pauseAudio();
        console.log(sound);
        this.audio.src = sound;



        this.audio.load();


         setTimeout(() => {this.playAudio();}, 0);
    }


    stop(){
        this.pauseAudio();
    }


    playEmptyGun(){
        this.play('sounds/gunEmpty.mp3');
    }


     playShot(){
        this.play('sounds/shot.mp3');
    }


    playShotEnemy(){
        this.play('sounds/enemyShot.mp3');
    }


    playReload(){
        this.play('sounds/test.mp3');
    }


    playReloadEnemy(){
        this.play('sounds/test.mp3');
    }

    playScore(){
        this.play('sounds/dikiyZapad.mp3');
    }

    playDie(){
        this.play('sounds/simpsndoh.mp3');
    }


    playDamageEnemy(){
        this.play('sounds/scream.mp3');
    }
}