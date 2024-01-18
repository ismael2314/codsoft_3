
// index.js 
// this is the javaScript file used to create the calculator

var btns = document.querySelectorAll('button'); // selecting every button
var input = document.getElementById('display'); // selecting the text input for both out put and input
btns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        if (btn.innerText=='C') {
            input.value = "";
            input.style="border-color:black;"
        }
        else if(btn.innerText=='='){
            try{
                input.value=eval(input.value);
                input.style="border-color:black;"
            }catch(e){
                input.value="Invalid input";
                input.style="color:red;"
            }
        }else{
            input.value = input.value + btn.innerText;
        }
    })
})