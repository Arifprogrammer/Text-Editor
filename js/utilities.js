function getButtonsById(id, btncolor, value){
    document.getElementById(id).style.color = btncolor;
    const values = document.getElementById("textarea");
    values.value;
    if(id == "bold"){
        if(value == "bolder"){
            return values.style.fontWeight = value;
        }
        return values.style.fontWeight = value;
    }
    else if(id == "italic"){
        if(value == "italic"){
            return values.style.fontStyle = value;
        }
        return values.style.fontStyle = value;
    }
    else if(id == "underline"){
        if(value == "underline"){
            return values.style.textDecoration = value;
        }
        return values.style.textDecoration = value;
    }
}

function getAlignById(id, btncolor, value){
    document.getElementById(id).style.color = btncolor;
    const values = document.getElementById("textarea");
    values.value;
    if(id == "text-left"){
        document.getElementById("text-right").style.color = "#1E293B";
        document.getElementById("text-center").style.color = "#1E293B";
        values.style.textAlign = value;
    }
    else if(id == "text-right"){
        document.getElementById("text-left").style.color = "#1E293B";
        document.getElementById("text-center").style.color = "#1E293B";
        values.style.textAlign = value;
    }
    else if(id == "text-center"){
        document.getElementById("text-left").style.color = "#1E293B";
        document.getElementById("text-right").style.color = "#1E293B";
        values.style.textAlign = value;
    }
}

function textCase(value){
    const values = document.getElementById("textarea");
    values.value;
    if(value == "uppercase"){
        return values.style.textTransform = "uppercase";
    }
    return values.style.textTransform = "lowercase";
}

function bothInput(id, type){
    document.getElementById(id).addEventListener(type, function(){
        const input = document.getElementById(id);
        input.value;
        const values = document.getElementById("textarea");
        values.value;
        if(id == "number"){
            document.getElementById(id).setAttribute("value", "16");
            if(input.value < 0) input.value = 0;
            return values.style.fontSize = input.value + "px";
        }
        return values.style.color = input.value;
    })
}
