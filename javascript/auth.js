import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,onAuthStateChanged,GoogleAuthProvider, signInWithPopup 
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, ref, set,get ,child} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

var userid = document.getElementById("userid");
var pass = document.getElementById("pass");
var signup = document.getElementById("signup");
var login = document.getElementById("login");
var getemail, getpass;
var loggoogle=document.getElementById("gbuton")
var creatusername,creatuseremail,creatuserpass;
var username =document.getElementById("username")
var usermail =document.getElementById("usermail")
var PASSWORD =document.getElementById("PASSWORD")
var data ;
var issignu=false;

console.log(issignu);
const firebaseConfig = {
  apiKey: "AIzaSyBRm6jaYF-0ojUxkd7JLBqmA6Le3V50skg",
  authDomain: "minipro-7555a.firebaseapp.com",
  databaseURL: "https://minipro-7555a-default-rtdb.firebaseio.com",
  projectId: "minipro-7555a",
  storageBucket: "minipro-7555a.appspot.com",
  messagingSenderId: "896087347515",
  appId: "1:896087347515:web:d478707e5d44080ff7e71e",
  measurementId: "G-GTJY445TTE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider(app);
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
document.getElementById("signup").addEventListener("click",()=>{
  issignu=true;
})
userid.addEventListener("input", (e) => {
  getemail = e.target.value;
  
  console.log(getemail);
});
pass.addEventListener("input", (e) => {
  getpass = e.target.value;
  
  console.log(getpass);
});
username.addEventListener("input", (e) => {
  creatusername = e.target.value;
  
  console.log(creatusername);
});
usermail.addEventListener("input", (e) => {
  creatuseremail = e.target.value;
  
  console.log(creatuseremail);
});
PASSWORD.addEventListener("input", (e) => {
  creatuserpass = e.target.value;
  console.log(creatuserpass);
});

document.getElementById("creatnewaccount").addEventListener("click", () => {
console.log("hello");

createUserWithEmailAndPassword(auth, creatuseremail, creatuserpass)
  .then((userCredential) => {
    // Signed in
    console.log("account is created");
   
    window.open("../html/music page.html","_self");
      const user = userCredential.user;
      
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});


login.addEventListener("click",()=>{
 
  localStorage.setItem("email",getemail);
  localStorage.setItem("password",getpass);
  console.log(getemail,"  ",getpass);
    signInWithEmailAndPassword(auth, getemail, getpass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    window.open("../html/music page.html","_self");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage," ",errorCode);
  });
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    window.open("../html/music page.html","_self");
  } else {
    // User is signed out
    // ...
  }
});
  loggoogle.addEventListener("click",()=>{
   try{ console.log("hi");  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      window.open("../html/music page.html","_self");
      const user = result.user;
      // ...
    })}catch(e){console.log(e);}
  })
 