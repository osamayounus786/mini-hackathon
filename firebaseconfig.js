
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDb5A5Ab4KqWKqNn9vLuwxmCO5pDKRkx00",
  authDomain: "mini-hackathon-11294.firebaseapp.com",
  projectId: "mini-hackathon-11294",
  storageBucket: "mini-hackathon-11294.appspot.com",
  messagingSenderId: "498950641472",
  appId: "1:498950641472:web:b57c9ebeee2d7698c00ca5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
