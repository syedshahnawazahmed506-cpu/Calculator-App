function appendValue(value){
    const display = document.getElementById('display');
    if(display.value ==='0' || display.value === 'Error'){
        display.value = value;
    }
    else{
        display.value += value;
    }
}
function clearDisplay(){
    document.getElementById('display').value = '0';
}
function calculate(){
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }
    catch (e){
        display.value = 'Error'
    }
}
// Intial value
document.getElementById('display').value = '0';