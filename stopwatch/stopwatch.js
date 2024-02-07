let start = document.querySelector(".btn-start");
let stop = document.querySelector(".btn-stop");
let reset = document.querySelector(".btn-reset");
let lap = document.querySelector(".btn-lap");


start.addEventListener("click",()=>{
    timer = true;
    startwatch();
});

stop.addEventListener("click",()=>{
    timer = false;
})

reset.addEventListener("click",()=>{
    timer = false;
    hr = 0,min = 0,sec = 0,millisec = 0;
    document.querySelector(".hr").innerHTML = "00";
    document.querySelector(".min").innerHTML = "00";
    document.querySelector(".sec").innerHTML = "00";
    document.querySelector(".mi-sec").innerHTML = "00"; 
});




// let timer = false;
let millisec = 0;
let sec = 0,min = 0,hr = 0;


function startwatch(){
    if(timer){
        millisec++;
        if(millisec == 100){
            sec++;
            millisec = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
        }

        let hrStr = hr;
        let minStr = min;
        let secStr = sec;
        let milliStr = millisec;

        if(hr < 10){
            hrStr = "0" + hrStr;
        }
        if(min < 10){
             minStr = "0" + minStr;
        }
        if(sec < 10){
            secStr = "0" + secStr;
        }
        if(millisec < 10){
            milliStr = "0" + milliStr;
        }

        document.querySelector(".hr").innerHTML = hrStr;
        document.querySelector(".min").innerHTML = minStr;
        document.querySelector(".sec").innerHTML = secStr;
        document.querySelector(".mi-sec").innerHTML = milliStr;

        setTimeout(startwatch,10);

        lap.addEventListener("click",()=>{
            document.querySelector(".lap-hr").innerHTML = hrStr;
            document.querySelector(".lap-min").innerHTML = minStr;
            document.querySelector(".lap-sec").innerHTML = secStr;
            document.querySelector(".lap-milli-sec").innerHTML = milliStr;
            lap.classList.add("span","f");   //fix me! to add hide property 
            
        });
    }
}