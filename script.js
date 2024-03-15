// Script for side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}

// Close side navigation
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}



//header-footer start
function loadHeaderAndFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
}

document.addEventListener('DOMContentLoaded', loadHeaderAndFooter);
//header-footer end
