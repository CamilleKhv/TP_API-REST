let cible = document.getElementById("supprimer") ;
cible.addEventListener("click",action) ;
function action(event){
    let ligneASuppr = element.parentNode.parentNode ;
    alert("clic sur le button : " + event.cible.id);
    ligneASuppr.remove() ;
}

