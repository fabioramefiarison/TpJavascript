const Get = (id)=>{
    return document.getElementById(id)
}

const nomPrenom = Get("nomPrenom")
const Adresse = Get("Adresse")
const provinces = Get("provinces")
const Remarque = Get("Remarque")
const btn = Get("btn")
const Alerte = Get("alerte")
console.log(Alerte);

btn.addEventListener('click', ()=>{
    if (nomPrenom.value != "" && Adresse.value != "" && provinces.value != "" ) {
        Alerte.innerHTML = "p"
    } 
    else{
        Alerte.innerHTML = "Champ incomplète ! "
    }
})

/*let stoquer = (LnomPrenom,Ladresse)=>{
    LnomPrenom : nomPrenom.value,
    Ladresse : Adresse.value,

}*/

