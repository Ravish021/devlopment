const btns = document.querySelectorAll(".btn");
const input = document.querySelector("input");
let string = "";

let arr = Array.from(btns);
arr.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == 'X'){
            string = string.substring(0,string.length - 1);
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})
