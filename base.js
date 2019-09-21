

/*
    this is base decoration classe
    - construct will append each child to panorama
    - create child will create child div
    - setMargin will set position of div
 */

class BaseDecoration {

    div;

    constructor(mainDiv){
        if(mainDiv == null){
            throw new Error("BaseDecoration element have to had MainDiv!");
        }
        this.div = this.createChildDiv();
        this.div.tag = Date.now();
        mainDiv.appendChild(this.div);
    }

    createChildDiv(){
        throw new Error("ChildDecoration should overwrite 'createChildDiv' ");
    }

    setMargins(topMargin, rightMargin){
        throw new Error("ChildDecoration should overwrite 'setMargins' ");
    }

}


class BaseDamagable extends BaseDecoration{

    constructor(mainDiv){
        super(mainDiv)
    }


    destroyedDiv(){
        throw new Error("ChildDamage should overwrite 'destroyedDiv' ");
    }
}