const display = document.getElementById("display");
var value = display.value

function showInDis(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value)
    } catch(error) {
        display.value = "Error";
    }

    quantityOfOpers = 0;
}

function reset(){
    display.value = "";
}