class Engine {


    bullets = 6;
    isLoading = false;
    health = 100;
    healthTable;
    arm;


    setArmDiv(div){
        this.arm = div;
    }


    setHealthTable(div){
        this.healthTable = div;
    }


    observeMouseOver() {
        let onMouseUpdate = (ev) => {
            if(this.arm !== undefined){
               this.arm.div.style.left = ev.pageX + 70 + "px";
            }
        };

        document.addEventListener("mousemove", onMouseUpdate, false);
        document.addEventListener("mouseenter", onMouseUpdate, false);
    };



    observeOnclick() {
        document.onclick = (ev) => {

            if(this.bullets > 0){
                let key = ev.target.tag;

                if(this.arm !== undefined && key !== undefined){
                    this.arm.getDictionary()[key].didDamage();

                    if(key === "fantom"){
                        let newValue = this.health === 0 ? 0 : this.health - 10;
                        this.changeHealthValue(newValue);
                    }
                }

                AudioHelper.getInstance().playShot();
                this.bullets -= 1
            }else{
                AudioHelper.getInstance().playEmptyGun();
            }

        };
    }



    observeKeypress(){

        document.onkeypress = (ev) => {

                if (ev.code === "KeyR" && this.isLoading === false) {
                    this.isLoading = true;

                    if(this.arm !== undefined){
                        this.arm.gunDisappearAnimation(this.arm.div.clientWidth * 2, this.arm.div, this.bullets);
                    }


                    setTimeout(()=> {
                        this.bullets = 6;

                        if(this.arm !== undefined) {
                            this.arm.gunAppearAnimation(this.arm.div.clientWidth, this.arm.div, this.isLoading);
                        }

                        this.isLoading = false;
                    }, 2000);
                }else if(ev.code === "Enter"){
                    let myEvent = new CustomEvent("startGame", {
                        detail: {}
                    });
                    document.dispatchEvent(myEvent);
                }
        }
    }

    didDamage() {
        let newValue = this.health === 0 ? 0 : this.health - 10;
        this.changeHealthValue(newValue);
    }

    changeHealthValue(value){
        this.health = value < 0 ? 0 : value > 100 ? 100 : value;

        if( this.healthTable !== undefined){
            this.healthTable.setHealthValue(this.health);
        }

        if(this.health < 1){this.sendEventDie();}
    }

    sendEventDie(){
        let myEvent = new CustomEvent("dieGamer", {
            detail: {}
        });
        document.dispatchEvent(myEvent);
    }
}




