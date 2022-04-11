/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
});



/*============== tapped ===============*/
const tabs = document.querySelectorAll(".menu-list-items li");
const menuDivs = document.querySelectorAll(".menu-div");

for (const tab of tabs) {
   tab.addEventListener('click',(e)=>{
       tabs.forEach((el)=>{
           el.classList.remove('mli-active');
        });
         e.currentTarget.classList.add('mli-active');

         menuDivs.forEach((el)=>{
            el.style.display='none';
         });
         document.querySelector(e.currentTarget.dataset.cont).style.display='flex';

   })
}