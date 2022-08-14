// ####Get Input ==============================
let yearInput = document.querySelector("#yearInput");
let monthInput = document.querySelector("#monthInput");
let dayInput = document.querySelector("#dayInput");
let hourInput = document.querySelector("#hourInput");
let minInput = document.querySelector("#minInput");
let secInput = document.querySelector("#secInput");
let runButton = document.querySelector("#runTime");
// ============================================

// ####Get Input Value ==============================
let yearInputValue = Number(yearInput.value);
let monthInputValue = monthInput.value.slice(0, 3).toLowerCase();
let dayInputValue = Number(dayInput.value);
let hourInputValue = Number(hourInput.value);
let minInputValue = Number(minInput.value);
let secInputValue = Number(secInput.value);
// ==================================================

// ####Chcking input Valid or not ==============================
if(dayInputValue>31 || dayInputValue<0){
    dayInput.style.border = "2px solid red";
}else{
    dayInput.style.border = "none";
}
if(hourInputValue>24 || hourInputValue<0){
    hourInput.style.border = "2px solid red";
}else{
    hourInput.style.border = "none";
}
if(minInputValue>60 || minInputValue<0){
    minInput.style.border = "2px solid red";
}else{
    minInput.style.border = "none";
}
if(secInputValue>60 || secInputValue<0){
    secInput.style.border = "2px solid red";
}else{
    secInput.style.border = "none";
}
// ================================= ==============================

// ##### Taking All Inputs as Target Time ===========================================
let targetTimeStr = `${monthInputValue} ${dayInputValue}, ${yearInputValue} ${hourInputValue}:${minInputValue}:${secInputValue}`;
//=================================================================

// Refresh the page when click button==============================
runButton.addEventListener("click", ()=>{
    window.location.reload();
});
//=======================================================
timeInterval();

let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let timeArr1 = [day, hour, min, sec];

function timeInterval(){
    setInterval(countDown, 1000);
}
function countDown(){
    let currentDate = new Date().getTime();
    let targetDate = new Date(targetTimeStr).getTime();
    let timeDeff = targetDate - currentDate;
    console.log("time Deff = "+timeDeff);
    
    if(timeDeff<=0){
        // if time defference is 0 or less it will show 00
        timeArr1.forEach((time)=>{
            timeDeff = 0;
            time.innerText = "00";
        });
    }else{
        let dayTime = Math.floor(timeDeff / (24*60*60*1000));
        let hourTime = Math.floor((timeDeff % (24*60*60*1000))/(60*60*1000));
        let minTime = Math.floor((timeDeff % (60*60*1000))/(60*1000));
        let secTime = Math.floor((timeDeff % (60*1000))/1000);
        
        let timeArr2 = [dayTime, hourTime, minTime, secTime];
        

        timeArr1.forEach((time, i)=>{
            if(timeArr2[i]<10){
                timeArr2[i] = "0"+ timeArr2[i];
            }
            time.innerText = timeArr2[i];
        });
    }

}
