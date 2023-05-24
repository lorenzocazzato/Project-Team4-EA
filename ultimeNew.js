//dichiaro bottoni
let notizieEa = document.querySelector(".notizieEa");
let fifa = document.querySelector(".fifa");
let starWars = document.querySelector(".starWars");
let battlefield = document.querySelector(".battlefield");
let apex = document.querySelector(".apexLegends");
let theSims= document.querySelector(".theSims");
let f1 = document.querySelector(".f1");
// fine dichiaro bottone 
// dichiaro container Card
let notizieEa2 = document.querySelector(".notizieEA2");
let fifa1 = document.querySelector(".fifa1");
let battlefield1 = document.querySelector(".battlefield1");
let starWars1 = document.querySelector(".starWars1");
let apexLegends1 = document.querySelector(".apexLegends1");
let theSims1= document.querySelector(".theSims1");
let f1Show = document.querySelector(".f1Show");
// fine container card


// funzioni 
function showFifa(){
    notizieEa2.style.display = "none";
    fifa1.style.display = "block";
    battlefield1.style.display = "none";
    starWars1.style.display = "none";
    apexLegends1.style.display= "none";
    theSims1.style.display= "none";
    f1Show.style.display= "none";
}
function showNotizie(){
    notizieEa2.style.display = "block";
    fifa1.style.display = "none";
    battlefield1.style.display = "none";
    starWars1.style.display = "none";
    apexLegends1.style.display= "none";
    theSims1.style.display= "none";
    f1Show.style.display= "none";
    
}
function showBattlefield(){
    fifa1.style.display = "none";
    notizieEa2.style.display = "none";
    battlefield1.style.display = "block";
    starWars1.style.display = "none";
    apexLegends1.style.display= "none";
    theSims1.style.display= "none";
    f1Show.style.display= "none";
    
}
function showStarWars(){
    starWars1.style.display = "block";
    fifa1.style.display = "none";
    notizieEa2.style.display = "none";
    battlefield1.style.display = "none";
    apexLegends1.style.display= "none";
    theSims1.style.display= "none";
    f1Show.style.display= "none";
}
function showApex(){
    fifa1.style.display = "none";
    notizieEa2.style.display = "none";
    battlefield1.style.display = "none";
    starWars1.style.display = "none";
    apexLegends1.style.display= "block";
    theSims1.style.display= "none";
    f1Show.style.display= "none";
}
function showTheSims(){
    theSims1.style.display= "block";
    starWars1.style.display = "none";
    battlefield1.style.display = "none";
    notizieEa2.style.display = "none";
    fifa1.style.display = "none";
    apexLegends1.style.display= "none";
    f1Show.style.display= "none";
}
function showF1Show(){
    f1Show.style.display= "block";
    starWars1.style.display = "none";
    battlefield1.style.display = "none";
    notizieEa2.style.display = "none";
    fifa1.style.display = "none";
    apexLegends1.style.display= "none";
    theSims1.style.display= "none";
    
}

fifa.onclick = showFifa
notizieEa.onclick = showNotizie
battlefield.onclick = showBattlefield
starWars.onclick = showStarWars
apex.onclick = showApex
theSims.onclick = showTheSims
f1.onclick = showF1Show
// fine funzioni 

