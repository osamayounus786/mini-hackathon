let clstime = document.querySelector("#clstime");
let clsschedule = document.querySelector("#clsschedule");
let tchName = document.querySelector("#tchName");
let secName = document.querySelector("#secName");
let courseName = document.querySelector("#clstime");
let batchNum = document.querySelector("#batchNum");
let clsBtn = document.querySelector("#clsBtn");

clsBtn.addEventListener("click",classButton);

function classButton(){
    console.log(clstime.value);
    console.log(clsschedule.value);
    console.log(tchName.value);
    console.log(secName.value);
    console.log(courseName.value);
    console.log(batchNum.value);
}
