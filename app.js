import {app} from "./firebaseconfig.js"
import {db} from "./firebaseconfig.js"
import { collection, addDoc,getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"; 

let clstime = document.querySelector("#clstime");
let clsschedule = document.querySelector("#clsschedule");
let tchName = document.querySelector("#tchName");
let secName = document.querySelector("#secName");
let courseName = document.querySelector("#courseName");
let batchNum = document.querySelector("#batchNum");
let name = document.querySelector("#name");
let fName = document.querySelector("#fname");
let rollNum = document.querySelector("#rollNum");
let cntcNum = document.querySelector("#cntctNum");
let cnicNum = document.querySelector("#cnicNum");
let stCourseName = document.querySelector("#stCourseName");
let pic = document.querySelector("#pic");
let clsBtn = document.querySelector("#clsBtn");


clsBtn.addEventListener("click",classButton);

async function classButton(){
 
const classRef = collection(db, "Class");

await setDoc(doc(classRef, "Sir Haider"), {
    ClassTime: clstime.value,
          ClassSchedule: clsschedule.value,
           TeacherName:tchName.value,
         SectionName: secName.value,
           CourseName: courseName.value,
      BatchNumber: batchNum.value, 
      Name: name.value,
        FatherName: fName.value,
        RollNum: rollNum.value,
        ContactNum: cntcNum.value,
        CNIC: cnicNum.value,
        StudentCourse: stCourseName.value,
        Picture: pic.value
    });

      
}
