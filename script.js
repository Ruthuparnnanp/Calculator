
// display content inside screen
function btnClick(value){
    display.value+=value;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    // let result=eval(display.value);
    // display.value=result;
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value="ERROR"
    }
}


function del(){
    display.value=display.value.slice(0,-1);
}