//https://www.googleapis.com/youtube/v3/search
var sertex = document.getElementById("serch");
var range = document.getElementById("vireange");
var subbut = document.getElementById("sub");
var titimg = document.getElementById("titimg");
var data;
var temp = "";
var noid = 0;
var count = 0;
var count2 = 0;
var body = document.body;
var isclick = false;
var favclick = false;
var isspeaker = false;
var img, tital;
var viid = null;
var itii;
var conut = 0;
var isplay = false;
var fboxclick=false
var key = "AIzaSyDG2PCCQtSuVqX418P97yE_z_D-6REytZE";
var div = document.createElement("div");

sertex.addEventListener("input", (e) => {
  console.log();
  let just = e.target.value;
  data = e.target.value;
  if (just === 13) {
    console.log("enter");
  }
});
var totalfave ;
setTimeout(()=>{
  
  totalfave = JSON.parse(localStorage.getItem("fav"));
try{ console.log(totalfave);
   localStorage.setItem("favnumber",totalfave.length)}catch(e){ console.log(e);
  localStorage.setItem("favnumber",0)
}
console.log("scan tofl",totalfave);
},1000)
function ceradele(srcc, tit) {
  img = document.createElement("img");
  tital = document.createElement("h4");
  tital.innerHTML = tit;
  tital.className = "titclass";
  img.src = srcc;
  img.id = noid;
  div.className = "list";
  div.id = "iddiv";
  img.className = "imgdis";
  div.appendChild(img);
  div.appendChild(tital);
  body.appendChild(div);

  noid++;
}
subbut.addEventListener("click", (e) => {
  if (count != 0) {
    imgdisrem();
    noid = 0;
  }
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${key}&type=video&q=${data}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.items.map((e) => {
        console.log(e);
        temp = e.snippet.thumbnails.default.url;
        ceradele(temp, e.snippet.title);
        count++;
        setInterval(() => {
          let imgrem = document.querySelectorAll(".imgdis");
          
          for (let i = 0; i < imgrem.length; i++) {
            imgrem[i].addEventListener("click", (e) => {
              viid = data.items[e.target.id].id.videoId;
              // document.getElementById("playr").setAttribute("src",`https://youtube.com/embed/${data.items[e.target.id].id.videoId}`)
              console.log(viid, data.items[e.target.id].id.videoId);
              
              itii = data.items[e.target.id].snippet.title;
              document.getElementById("itii").innerHTML = itii;

              
              titimg.src = imgrem[i].currentSrc;
            });
          }
        }, 1000);
      });
    });
});
//https://youtube.com/embrd/AjEY5N6gK3E
function imgdisrem() {
  let imgrem = document.querySelectorAll(".imgdis");
  let titrem = document.querySelectorAll(".titclass");

  // console.log(imgrem);
  for (let i = 0; i < imgrem.length; i++) {
    imgrem[i].remove();
    titrem[i].remove();
  }
}

function deletele() {
  imgdisrem();
 try{ document.getElementById("iddiv").classList.add("hid");
 document.getElementById("iddiv").classList.remove("vis");}
 catch(e){

 }
}
body.addEventListener("click", (e) => {
  //console.log("hii");
  deletele();
});
sertex.addEventListener("click", () => {
  document.getElementById("iddiv").classList.remove("hid");

  console.log("click ho gaya");
});

//
function onYouTubeIframeAPIReady() {

}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(() => {}, 6000);
    done = true;
  }
}
document.getElementById("stop-button").addEventListener("click", () => {
  console.log("stop");
  isplay = false;
  player.stopVideo();
});
document.getElementById("pause-button").addEventListener("click", () => {
  console.log("paus");
  player.pauseVideo();
});

document.getElementById("play-button").addEventListener("click", () => {
  console.log(viid);
  player.playVideo();
});
document.getElementById("titimg").addEventListener("click", () => {
  console.log(viid);
  console.log("ni pata yrr");
  if (count2 == 0) p(viid);
  else {
    console.log("ni pata kuch problem h");
    player.loadVideoById(viid, 0, "large");
    document
      .getElementById("favbut")
      .setAttribute(
        "src",
        "../res/[CITYPNG.COM]HD White Outline Heart Icon Notification Instagram PNG - 2270x1740.png"
      );
    isclick = false;
  }
  if (isplay) {
    setTimeout(() => {
      console.log(isplay);
      range.max = player.getDuration();
      const totalSeconds = player.getDuration();
//player.unMute();
      document.getElementById("volume").value = player.getVolume();
      // 👇️ get number of full minutes
      const minutes = Math.floor(totalSeconds / 60);

      // 👇️ get remainder of seconds
      const seconds = totalSeconds % 60;
      document.getElementById("dur").innerText = `${minutes}::${seconds}`;
    }, 1000);
  }
  count2++;
});
function p(viid) {
  try {
    console.log("function p");
    isplay = true;
    player = new YT.Player("player", {
      height: "0",
      width: "0",
      videoId: viid,

      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

setInterval(() => {
  if (isplay) {
    range.value = player.getCurrentTime();
    if (player.getDuration() == player.getCurrentTime()) {
      player.stopVideo();
      range.value = 0;
    }
  }
}, 1000);

range.max = 120;
console.log();
range.addEventListener("change", (e) => {
  player.seekTo(e.target.value);
  console.log(e.target.value);
});
document.getElementById("favbut").addEventListener("click", () => {
  isclick = !isclick;
  console.log("isclick");
  if (isclick) {
    document.getElementById("favbut").setAttribute("src", "../res/fav.png");
    localStorage.setItem("viid", viid);
    localStorage.setItem("tital", itii);
    localStorage.setItem("imgurl", titimg.src);
  } else {
    document
      .getElementById("favbut")
      .setAttribute(
        "src",
        "../res/[CITYPNG.COM]HD White Outline Heart Icon Notification Instagram PNG - 2270x1740.png"
      );
  }
});
document.getElementById("speaker").addEventListener("click", () => {
  isspeaker = !isspeaker;
  console.log("isclick");
  if (isspeaker) {
    player.mute();
    document.getElementById("speaker").setAttribute("src", "../res/mute.png");
  } else {
    document
      .getElementById("speaker")
      .setAttribute("src", "../res/speakericon.png");
    player.unMute();
  }
});

document.getElementById("Playlist").addEventListener("click", () => {
  console.log("hiii");
  favclick = !favclick;
  if (favclick) {
    document.getElementById("favbox").classList.add("apper");
    document.getElementById("favbox").classList.remove("diss");
    var fav = JSON.parse(localStorage.getItem("fav"));
    console.log(fav.length);
    for (let fi = 1; fi <= fav.length - 1; fi++) {
      var faccan = document.createElement("div");
      var faccanimg = document.createElement("img");
      var favcantit = document.createElement("h4");
      faccanimg.id = "imgfav" + fi;
      faccanimg.className = "faccanimg";
      faccanimg.src = fav[fi].imgurl;
      favcantit.id = "titfav" + fi;
      favcantit.innerText = fav[fi].tital;
      favcantit.className = "faccantital";
      faccan.className = "favviewbox";
      faccan.id = "favviewbox" + fi;
      faccan.appendChild(faccanimg);
      faccan.appendChild(favcantit);
      document.getElementById("favbox").appendChild(faccan);
      console.log(fav[fi], fi);
    }

    setInterval(() => {
      let faccanclick=document.querySelectorAll(".faccanimg");
    console.log(faccanclick.length);
      for (let i = 0; i < faccanclick.length; i++) {
        faccanclick[i].addEventListener("click", (e) => {
          viid=fav[i+1].viid
          document.getElementById("itii").innerHTML=fav[i+1].tital
          titimg.src=fav[i+1].imgurl
          player.loadVideoById(viid, 0, "large");
        });
      }
    }, 1000);
    console.log(fav);
  } else {
    document.getElementById("favbox").classList.remove("apper");
    document.getElementById("favbox").classList.add("diss");
    var faccandel=document.querySelectorAll(".favviewbox");
    var faccanimgdel=document.querySelectorAll(".faccanimg");
    var favcantitdel=document.querySelectorAll(".faccantital");
    for (let fid = 0; fid <= faccandel.length; fid++) {
      favcantitdel[fid].remove()
      faccanimgdel[fid].remove()
      faccandel[fid].remove()
console.log("remove ho raha h");
    }

  }
});

document.getElementById("volume").addEventListener("change", (e) => {
  player.setVolume(e.target.value);
});
document.getElementById("Larrow").addEventListener("click",()=>{
  fboxclick=!fboxclick
  console.log(fboxclick);
  if(fboxclick)
 {
  try{
    document.getElementById("friend").classList.remove("fboxdiss")
    document.getElementById("friend").classList.add("fboxapp")

      }
      catch(e){
    
      }
 }
 else{
  console.log("fbox diss");
 try{
  document.getElementById("friend").classList.remove("fboxapp")
  document.getElementById("friend").classList.add("fboxdiss")
 }
 catch(e){

 }
  
 }
})
