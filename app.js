function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  //var tempClassFadeIn = document.getElementById(pageName);
  //tempClassFadeIn.add("fade");
  //tempClassFadeIn.remove("fade");


  // Show the specific tab content
  //
  //console.log(pageName);
  document.getElementById(pageName).style.display = "block";
  document.getElementById(pageName).style.visibility = "visible";
  document.getElementById(pageName).classList.add("fade-in"); 
  // Add the specific color to the button used to open the tab content
  //console.log(document.querySelector('.content'));
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); 
