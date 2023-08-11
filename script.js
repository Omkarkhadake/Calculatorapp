let display = document.querySelector(".Display");
let buttons = document.querySelectorAll(".btn");
let DEL = document.getElementById("del-btn");
let reset = document.querySelector(".reset-btn");
let equalto = document.querySelector(".equalto-btn");





(function (){


    buttons.forEach(button => {
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            console.log(value);
            display.value += value;
        })
        
    });

    reset.addEventListener('click',function(e){
        display.value ="";
    })



    equalto.addEventListener('click',function(e){
        if (display.value ===""){
            alert("Please Enter Value");
            display.value ="";
        }
        else{
            let answer =eval(display.value);
            display.value = answer;
        }
    })
   



})();


function deletevalue(){

    let displayvalue = display.value;
    let displayNewvalue = displayvalue.slice(0, -1);
    display.value = displayNewvalue;

}