let btn = document.getElementById('btnM');
let toggler = document.getElementById('dd-menu');
let mobileMenu = document.querySelector('.navbar-nav ');
let barMenu = document.querySelector('.navbar');

btn.addEventListener("click",()=>{
     barMenu.classList.toggle("slideMenu")
 })
 toggler.addEventListener("click",()=>{
    mobileMenu.classList.toggle("menutoggler")
})
// toggler.addEventListener("click",menuMbStyle)
//  function menuMbStyle(){
//     mobileMenu.style.opacity="1";
//     mobileMenu.style.backgroundColor ="black";
//     mobileMenu.style.height ="auto";
//     mobileMenu.style.flexDirection ="column";
//     mobileMenu.style.padding="10px 20px";

//  }
