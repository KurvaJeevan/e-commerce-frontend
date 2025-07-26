const root=document.getElementById("root");
const allAnchors=document.querySelectorAll("a");

function Clicking(e){
    e.preventDefault();
 
    // history.pushState(null,"",e.history.pathname)

}
allAnchors.forEach((anchor)=>{
    anchor.addEventListener("click",Clicking);
})