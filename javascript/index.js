var dispas=document.getElementById("dispas")
var createaccount=document.getElementById("signup");
var Loginpage=document.getElementById("Loginpage");
var pass=document.getElementById("pass")

var isclick=false
dispas.addEventListener("click",()=>{
    isclick=!isclick
    if(isclick)
    {
        
        dispas.setAttribute("src", "../res/eye-icon-1457.png");
        pass.setAttribute("type","text")
        
    }
    else{
        dispas.setAttribute("src", "../res/icons8-closed-eye-96.png");
        pass.setAttribute("type","password")
    }
    
})
createaccount.addEventListener("click",()=>{
    try{
        document.getElementById("loginpage").classList.remove("app")
        document.getElementById("creatpage").classList.remove("app")
   
    }catch(e)
    {
console.log(e)
    }
    document.getElementById("loginpage").classList.add("diss")
 
    document.getElementById("avatorcontoner").classList.add("diss")
       
})

Loginpage.addEventListener("click",()=>{
 
   try{
    document.getElementById("loginpage").classList.remove("diss")
 
    document.getElementById("creatpage").classList.remove("diss")

   }catch(e){
    console.log(e)
   }
    document.getElementById("loginpage").classList.add("app")
    document.getElementById("creatpage").classList.add("app")
 
})
/*
document.getElementById("backtocreate").addEventListener("click",()=>{
    try{
        document.getElementById("creatpage").classList.remove("app")
        document.getElementById("avatorcontoner").classList.remove("diss")
    }catch(e){

    }
    document.getElementById("creatpage").classList.add("diss")
    document.getElementById("avatorcontoner").classList.add("app")
})
*/
document.getElementById("avator").addEventListener("mouseover",()=>{
    let avator=document.querySelectorAll(".grid-item");
    for(let i=0;i<avator.length;i++){
      setInterval(()=>{
        avator[i].addEventListener("click",()=>{
            console.log( avator[i].src.slice(35,40));
            localStorage.setItem("dp",avator[i].src.slice(35,40))
            try{
                document.getElementById("avatorcontoner").classList.remove("diss")
           
            }catch(e)
            {
        console.log(e)
            }
            document.getElementById("avatorcontoner").classList.add("app")
         
            document.getElementById("creatpage").classList.add("diss")

        })
      },500)
    }
    })
