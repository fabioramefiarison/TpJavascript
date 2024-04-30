var i;
for (i = 1; i <= localStorage.length; i++) {
    var myNodelist = document.createElement("li");
    myUL.appendChild(myNodelist)
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist.innerHTML = localStorage.getItem("liste " +i)
  myNodelist.appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 1; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove()
    localStorage.removeItem("liste "+ i) 
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, true);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  let x = localStorage.length +1
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    localStorage.setItem("liste "+ x,inputValue) 
    x++
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
   
  for (i = 1 ; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove()
      localStorage.removeItem("liste "+ i) 
    }
  }
}
