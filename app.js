import {app} from "./firebaseconfig.js"
import {db} from "./firebaseconfig.js"
import { collection, addDoc,getDocs,where,query, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"; 
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";


const auth = getAuth(app);
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

await addDoc(classRef,  {
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


// let collectionRef = collection(db, "Class");
//   let condition = where("RollNum", "==", "98");

//   const q = query(collectionRef, condition);
//   let usersSnapshot = await getDocs(q);
//   usersSnapshot.forEach((doc) => {
//     // console.log(doc.data());
//     console.log(doc.data());
//     // secB.addEventListener("click", () => doc.data());
//     // secC.addEventListener("click", () => doc.data());
//   });
//   console.log("other User");


  let searchUser = document.querySelector("#searchUser");
  searchUser.addEventListener("click",finduser);

  async function finduser(){
    let collectionRef = collection(db, "Class");
    let userInput = document.querySelector("#userInput");
    let condition = where("RollNum", "==", userInput.value);

    
    const q = query(collectionRef, condition);
    let usersSnapshot = await getDocs(q);
    usersSnapshot.forEach((doc) => {
      // console.log(doc.data());
      
      let cardName = document.querySelector("#cardName");
      let cardFname = document.querySelector("#cardFname");
      let cardRoll = document.querySelector("#cardRoll");
      let cardContact = document.querySelector("#cardContact");
      let userPic = document.querySelector("#userPic");
      // showData.innerHTML = doc.data().RollNum;
      cardName.innerHTML = doc.data().Name;
      cardFname.innerHTML = doc.data().FatherName;
      cardRoll.innerHTML = doc.data().RollNum;
      cardContact.innerHTML = doc.data().ContactNum;
      // userPic.innerHTML = doc.data().Picture;

      // let card1 = document.querySelector("#card1");
      // card1.classList.add("myStyle");

      console.log(doc.data());
      // secB.addEventListener("click", () => doc.data());
      // secC.addEventListener("click", () => doc.data());
    });
    console.log("other User");
  }


  let signOutBtn = document.querySelector("#LogOut");
signOutBtn.addEventListener("click", logOut);
async function logOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location = "signin.html"
  }).catch((error) => {
    // An error happened.
  });
}