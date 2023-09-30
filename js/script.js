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

// Função para verificar a posição da janela e destacar o item do menu
function destacarItemMenu() {
    const sections = document.querySelectorAll(".page-mk");
    const menuItems = document.querySelectorAll(".navbar-nav li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            // Se a seção estiver visível na janela
            menuItems.forEach((item) => item.classList.remove("ativo"));
            menuItems[index].classList.add("ativo");
         
          
        } else{
            menuItems[index].classList.remove("ativo");
            
        }
    });
}
let bar = document.querySelector('.barr')
let cr = document.querySelector('.circles')
function pageact(){
    let react = document.querySelector('#sobre');
    let rAct = react.getBoundingClientRect();
    if(rAct.top <= 50 && rAct.bottom >=50){
       bar.style.width = "100%"
       bar.style.overflow = "visible"
       setTimeout(()=>{
        cr.style.opacity = "1"
        cr.style.transition = ".5s ease-in"

       },500)
      
        console.log('vc esta no meio da pagina desejada')
    }
    else{
        bar.style.width = ""
        bar.style.overflow = "hidden"
        cr.style.opacity = "0"
    }
}


// Adicione um evento de rolagem para chamar a função de destaque
window.addEventListener("scroll", destacarItemMenu);
window.addEventListener("scroll", pageact);
