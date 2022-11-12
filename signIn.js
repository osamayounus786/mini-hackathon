import {app} from "./firebaseconfig.js"
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#btn");
btn.addEventListener("click",signIn);

function signIn(){

const auth = getAuth(app);
signInWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user login successfully",user);
    window.location = "index.html";
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage,errorCode);
    console.log("something went wrong",error);
    // ..

    
  });
}
