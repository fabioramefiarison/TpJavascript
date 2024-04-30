let voiture = {
    marque : "BMW",
    couleur : "noir",
    prix : 1000,
    direBonjour : function(){
        console.log("bonjour  " + this.propriétaire);
    }
}
voiture.propriétaire = "Rakoto"
delete voiture.prix
voiture.prix = 950
voiture["prix"] =  300
/*for (const cle in voiture){
    console.log(cle + " : " + voiture[cle]);
}*/
const valeur = Object.values(voiture)
const clé = Object.keys(voiture)
//console.log(clé,valeur);

function Animal (nom,voie){
    this.nom = nom,
    this.voie = voie
    this.getCaracter = function(){
        console.log("cet animal " + this.nom + ' : ' + this.voie)
    }
}
const animal1 = new Animal("chien","aboie")
const animal2= new Animal("Lion","rugir")
console.log(animal2.getCaracter());

