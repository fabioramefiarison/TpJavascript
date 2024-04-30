/*function reqListener(){
 //console.log(this.responseText)
}
let req = new XMLHttpRequest();
req.onload = reqListener
//req.open("GET" , "data-ajax.txt", true);
req.open("GET","data.json",true)
req.send();

//fetch
fetch("data-ajax.txt").then((response)=>{
    //console.log(response);
}).catch((err)=>{
    //console.log(err);
})
//fetch("data.json").then((res)=>res.text()).then((data)=>{console.log(data)})

const myHeaders = new Headers();
const init = {
    method : "GET",
    headers : myHeaders,
    mode : "cors",
    cache : "default",
};
//fetch("data.json",init).then((res)=>console.log(res))
*/
//CRUD => Create(post) ,Read(get) ,Update(Put) ,Delete(Delete)
const init2 = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
    },
   body : JSON.stringify({
        pseudo : "daFa uzi",
        message : "Salama !",
    }),
    mode : "cors",
    Credentials : "same-origin",
};
let send = document.querySelector("input[type=submit]");
send.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch("http://localhost:3000/post", init2).then(() => console.log("donnée envoyée.."))
})