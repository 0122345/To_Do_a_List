
var  listyange = document.getElementsByTagName("LI");
var j;
for (j = 0; j <  listyange.length; j++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var time = document.createDocumentFragment("date");
  span.className = "close";
  span.appendChild(txt);
  listyange[j].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var k;
for (k = 0; k < close.length; k++) {
  close[k].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (k = 0; k < close.length; k++) {
    close[k].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}