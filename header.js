const but = document.getElementById("sideBarButton");
const darkNavbar = document.getElementById("darkColor");
const closeSide = document.getElementById("closeSideBar");
// const body = document.querySelector("#offcanvasExample > div.offcanvas-backdrop.fade.show");
// console.log(body)

if(but.click = true){
    but.addEventListener("click", ()=> darkNavbar.classList.add("scrolled-up"))
} 
if (closeSide.click = true) {
  closeSide.addEventListener("click", ()=> darkNavbar.classList.remove("scrolled-up"))
}
// if (body.click = true) {
//   body.addEventListener("click", ()=> darkNavbar.classList.remove("scrolled-up"))
// }



// comportamento navbar nera con logo utente 
document.addEventListener("DOMContentLoaded", function () {
    el_autohide = document.querySelector(".autohide");
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
    
    if (el_autohide) {
      var last_scroll_top = 0;
      window.addEventListener("scroll", function () {
        let scroll_top = window.scrollY;
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove("scrolled-down");
          el_autohide.classList.add("scrolled-up");
         } else {
          el_autohide.classList.remove("scrolled-up");
          el_autohide.classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
    }
  });