class TargetTool {


    moveUpTarget(document, arm, screenWidht){
        document.addEventListener("mousemove",onMouseUpdate,false);
        document.addEventListener("mouseenter",onMouseUpdate,false);

        function onMouseUpdate(ev){

            let offset = ev.pageX - (screenWidht / 2) + 170;
            arm.style.transform = 'translateX('+offset+'px)';

        }

    }
}

class ArmTool {

    size = 300;


    createArm(screenSize){
        let arm = document.createElement("div");
        arm.style.width = this.size + "px";
        arm.style.height = this.size + "px";
        arm.style.display = "inlineBlock";
        arm.style.backgroundImage = "url('images/Arm.png')";
        arm.style.position = "fixed";
        arm.style.bottom =  "-90px";
        arm.style.left = (screenSize / 2) - (this.size / 2) + "px";
        arm.style.backgroundSize = "contain";
        arm.style.backgroundPosition = "center";
        arm.style.backgroundRepeat = "no-repeat";

        return arm;
    }
}