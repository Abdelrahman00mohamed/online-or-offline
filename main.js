let title=document.querySelector(".title");
let ul=document.querySelector("ul");
let ree=document.querySelector(".ree");
//start code online or offline
 window.onload=function(){
  if(window.navigator.onLine){
    online()
   }else{
     offline()
  }
 }
window.addEventListener("online",function(){
  online();
});
window.addEventListener("offline",function(){
  offline();
});
//end code online or offline

function reeload(){
  window.location.reload();
}
function online(){
title.innerHTML="ActiveNow";
title.style.color='green';
ul.classList.add("hit");
ree.classList.add("hit");
}
function offline(){
  title.innerHTML="No internet";
  title.style.color="black";
  ul.classList.remove("hit");
 ree.classList.remove("hit");
}