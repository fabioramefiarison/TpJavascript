function Get(id){
    return document.getElementById(id)
}

let input = Get("barre-recherche")
let ajouter = Get("ajouter")

const divList = Get("myUl")


const dateConver = (dateAConvertir)=>{
    let newDate = new Date(dateAConvertir).toLocaleDateString("fr-FR",{
        day : "numeric",
        month : "numeric",
        year : "numeric",
        hour : "numeric",
        minute : "numeric"
    })
    return newDate
}

ajouter.addEventListener('click',()=>{
        var Li = document.createElement("li");
        var inputValue = input.value;
        var t = document.createTextNode(inputValue);
        t.className ="txt-input"
        Li.appendChild(t);

        if (inputValue === '') {
          alert("Ecrire quelque chose !");
        } else {
            divList.appendChild(Li);
        }
        input.value = ""
        var spanDate = document.createElement("span")
        var datePars = dateConver(new Date())
        var txtspanDate = document.createTextNode(datePars)
        postList(inputValue,datePars)
        spanDate.className = "date"
        spanDate.appendChild(txtspanDate)
        Li.appendChild(spanDate)
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        Li.appendChild(span);

       
        var close = document.getElementsByClassName("close");
        for (var i = 1; i < close.length; i++) {    
            const LesListes = {
              method : "DELETE",
              headers : {
                  "Content-Type" :  "application/json",
              },
              mode : "cors",
              Credential : "same-origin",
            }
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            fetch("http://localhost:3000/posts/" + i, LesListes).then( ()=> 
            alert("Liste bien supprimer..")
            )
          }
        }
})


const postList = (ip,dt)=>{
const AJOUT = Get("ajouter")      
const LesListes = {
  method : "POST",
  headers : {
      "Content-Type" :  "application/json",
  },
  body: JSON.stringify({
      nameList : ip,
      dateDisplay : dt,
  }),
  mode : "cors",
  Credential : "same-origin",
}
AJOUT.addEventListener('click',(e)=>{
  e.preventDefault()
  fetch("http://localhost:3000/posts", LesListes).then( ()=> 
  alert("Liste bien ajouté..")
  )
})
}



window.onload = ()=>{
  fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((data) =>{ 
    listeDisplayLoad(data)
  })
}
  
listeDisplayLoad = (data) =>{
let myUL = Get("myUl")
for (let i = 0 ; i < data.length ; i++) {
    var myNodelist = document.createElement("li");
    myUL.appendChild(myNodelist)
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist.innerHTML = data[i].nameList
  myNodelist.appendChild(span);
  
  var spanDate = document.createElement("span")
  var datePars = data[i].dateDisplay
  var txtspanDate = document.createTextNode(datePars)
  spanDate.className = "date"
  spanDate.appendChild(txtspanDate)
  myNodelist.appendChild(spanDate)

}


var close = document.getElementsByClassName("close");
for (let i = 1; i <= close.length; i++) { 
      const LesListes = {
        method : "DELETE",
        headers : {
            "Content-Type" :  "application/json",
        },
        mode : "cors",
        Credential : "same-origin",
      }
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      fetch("http://localhost:3000/posts/" + i, LesListes).then((res)=>  res.json())
      .then((data) =>{
        data[i].remove()
        alert("Liste bien supprimé !")
      })
    }
  }
  }






