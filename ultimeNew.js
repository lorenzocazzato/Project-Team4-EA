const trigger = document.querySelectorAll(".trigger");
const cardCont = document.querySelectorAll(".provaScreen");


trigger.forEach((el)=>{
    el.addEventListener("click", (ciao)=>{
        cardCont.forEach((nonTiVedo)=> nonTiVedo.classList.remove("yes"));

    })
})

   
