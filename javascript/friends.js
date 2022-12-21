  // Import the functions you need from the SDKs you need
  console.log("friends connect");
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { getDatabase, ref, child, get , set , remove} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();
var friendname
  var email=localStorage.getItem("email");
  console.log("friends.js"," ",email.substring(0,7));
  var asses=email.substring(0,7);
  document.getElementById("usertext").innerText=asses
  var friend =email.substring(0,7)+"_friends";
  var friendlist=asses+"list"
 var tr,serch,temp,h,sendfrq
 const flist= document.createElement("div");
 const flistValue= document.createElement("button");
 flistValue.id="friendsend"
 flistValue.className="btserchfriendclass"
console.log(asses);
document.getElementById("serchfriend").addEventListener("input",(e)=>{
  serch=e.target.value
})

 console.log();
document.getElementById("btserchfriend").addEventListener("click",()=>{
  const dbref=ref(database);
    
    get(child(dbref,"/")).then((snapshot) => {
      if (snapshot.exists()) {
        tr=snapshot.val();
        console.log(snapshot.val());    
        const myJSON = JSON.stringify(tr);
        temp= Object.keys(tr)
        console.log(temp);
       temp.map((e,key)=>{
        console.log(e.includes(serch));
  
        if(e.includes(serch)){
          console.log(key);
        
        
         flistValue.innerText=e;
         console.log(flistValue);
         flist.appendChild(flistValue);
         document.getElementById("friendser").appendChild(flist);
         sendfrq=e
          h=document.getElementById("friendsend")
         
        }
       })
       // console.log("showing fava ");  
      //  console.log(fdata);
       // localStorage.setItem("fav",JSON.stringify(snapshot.val()))

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error);
    });
   
})

flistValue.addEventListener("click",()=>{
  console.log("hii");
  
 try{
  set(ref(database, `${sendfrq}/frilist`), {
    frend: asses
   
  });
 }
 catch(e){
console.log(e);
 }
 try{ set(ref(database, `${asses}/isFriNoti`), {
  requst:true 
 
});}
 catch(e){
  console.log(e);
 }
  console.log("requist send");
})

  console.log("function activite");
  const dbRef2 = ref(getDatabase());
  get(child(dbRef2,`${asses}/frilist`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log("ewrxtcfyvgubhin");
      friendname=snapshot.val().frend
      console.log(snapshot.val().frend);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  setInterval(()=>{
    get(child(dbRef2,`${asses}/isFriNoti`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log("isfriend");
        console.log(snapshot.val().requst);
        if(snapshot.val().requst)
        {document.getElementById("fn").innerText=friendname
          try{
  document.getElementById("notiid").classList.add("notiapp");
  setTimeout(()=>{
    document.getElementById("notiid").classList.remove("notiapp");
    document.getElementById("notiid").classList.add("notidisapp");
  },5000)
          }
          catch(e){
  console.log(e);
          }
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },1000)

document.getElementById("requseaccept").addEventListener("click",()=>{
  console.log(`${asses}/acceptfriends`);
  set(ref(database, `${asses}/acceptfriends`), {
    friends: friendname
   
  }); 
  set(ref(database, `${asses}/isFriNoti`), {
    requst:false 
   
  });

  const tasksRef = ref(database, `${asses}/isFriNoti`);

remove(tasksRef).then(() => {
  console.log("location removed");
});
const tasksRef1 = ref(database, `${asses}/frilist`);

remove(tasksRef1).then(() => {
  console.log("location removed");
});
})
  document.getElementById("requreject").addEventListener("click",()=>{
    const tasksRef = ref(database, `${asses}/isFriNoti`);

remove(tasksRef).then(() => {
  console.log("location removed");
});
const tasksRef1 = ref(database, `${asses}/frilist`);

remove(tasksRef1).then(() => {
  console.log("location removed");
});
  })
  document.getElementById("notiicon").addEventListener("click",()=>{
   try{
    document.getElementById("notiid").classList.remove("notidisapp")
    document.getElementById("notiid").classList.add("notiapp");

   }catch{

   }
  })
  document.getElementById("notiboxcut").addEventListener("click",()=>{
   try{
    document.getElementById("notiid").classList.remove("notiapp");
    document.getElementById("notiid").classList.add("notidisapp");
   }
   catch(e){

   }
  })

