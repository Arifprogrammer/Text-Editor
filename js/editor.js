// --------------bold----------------
let x = 0;
document.getElementById("bold").addEventListener("click", function(){
    if(x == 0){
        getButtonsById("bold", "white", "bolder");
        x = 1;
    }
    else{
        getButtonsById("bold", "#1E293B", "initial");
        x = 0;
    }
})

// --------------italic----------------
document.getElementById("italic").addEventListener("click", function(){
    if(x == 0){
        getButtonsById("italic", "white", "italic");
        x = 1;
    }
    else{
        getButtonsById("italic", "#1E293B", "initial");
        x = 0;
    } 
})

// --------------underline----------------
document.getElementById("underline").addEventListener("click", function(){
    if(x == 0){
        getButtonsById("underline", "white", "underline");
        x = 1;
    }
    else{
        getButtonsById("underline", "#1E293B", "initial");
        x = 0;
    }
})
// --------------textleft----------------
document.getElementById("text-left").addEventListener("click", function(){
    getAlignById("text-left", "white", "start");
})
// --------------textright----------------

document.getElementById("text-right").addEventListener("click", function(){
    getAlignById("text-right", "white", "end");
})

// --------------textcenter---------------
document.getElementById("text-center").addEventListener("click", function(){
    getAlignById("text-center", "white", "center");
})

// --------------numberinput---------------
bothInput("number", "click");
bothInput("number", "input");

// --------------textcase---------------
document.getElementById("p").addEventListener("click", function(){
    if(x == 0){
        textCase("uppercase");
        x = 1;
    }
    else{
        textCase("lowercase");
        x = 0;
    }
})

// --------------colorinput---------------
bothInput("color", "input");

const icons = document.getElementsByTagName("i");
for(let x of icons){
    x.classList.add("cursor-pointer")
}
