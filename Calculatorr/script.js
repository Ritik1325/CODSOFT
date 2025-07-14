const display=document.getElementById('check');


function todisplay(val){
    display.value+=val;

}

function clearr(){
    display.value="";
}

function calculate(){
   try {

     display.value=eval(display.value);
   } catch (error) {

    display.value="error";
    
   }
}