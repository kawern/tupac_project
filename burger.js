// JavaScript Document
var menu=document.querySelector("#nav ul");

function mobilMenu(){
	if(menu.style.display!=="flex"){
		menu.style.display="flex";
	}else{
        menu.style.display="none";
    }
}

//FØLGENDE ER KUN FOR NØRDER :) - tag højde for, hvis brugeren vender mobilen...

    // Defining event listener function:
    function displayWindowSize(){
        // Get width and height of the window excluding scrollbars:
        var w = document.documentElement.clientWidth;
        if(w>480){
            if(menu.style.display!=="flex"){
                menu.style.display="flex";
            }
        }else{
            if(menu.style.display!=="none"){
                menu.style.display="none";
            }
        }
        if(w>720){
            if(menu.style.display!=="flex"){
                menu.style.display="flex";
            }
        }else{
            if(menu.style.display!=="none"){
                menu.style.display="none";
            }
    }
    if(w>1024){
        if(menu.style.display!=="flex"){
            menu.style.display="flex";
        }
    }else{
        if(menu.style.display!=="none"){
            menu.style.display="none";
        }
}
}
    // Attaching the event listener function to window's resize event:
    window.addEventListener("resize", displayWindowSize);
