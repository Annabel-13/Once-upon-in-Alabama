
class Gun extends Decoration{

    constructor(mainDiv){
        super(mainDiv)
    }

    createChildDiv(){
        let size = 300;
        let arm = document.createElement("div");
            arm.style.width = size + "px";
            arm.style.height = size + "px";
            arm.style.display = "inlineBlock";
            arm.style.backgroundImage = "url('images/Arm.png')";
            arm.style.position = "fixed";
            arm.style.backgroundSize = "contain";
            arm.style.backgroundPosition = "center";
            arm.style.backgroundRepeat = "no-repeat";

        return arm;
    }

    setMargins(screenSize){
        let size = 300;
        this.div.style.bottom =  "-90px";
        this.div.style.left = (screenSize / 2) - (size / 2) + "px";
    }

    moveGun(document, screenWidht){
        document.addEventListener("mousemove",onMouseUpdate,false);
        document.addEventListener("mouseenter",onMouseUpdate,false);

        let currentDiv = this.div;

        function onMouseUpdate(ev){
            let offset = ev.pageX - (screenWidht / 2) + 170;
            currentDiv.style.transform = 'translateX('+offset+'px)';
        }
    }


}