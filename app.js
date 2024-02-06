var lastPageName = "main_page";

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;

  if(lastPageName == pageName){
    return;
  }

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("fade-in");
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content with fade-in effect
  var contentContainer = document.getElementById("cont");
  contentContainer.style.display = "block";
  contentContainer.classList.remove("fade-in");
  contentContainer.offsetWidth; // Trigger reflow to restart the animation
  contentContainer.classList.add("fade-in");

  // Show the specific tab content

  if(pageName == "main_page"){
    document.getElementById(pageName).style.display = "flex";
  }
  else{
    document.getElementById(pageName).style.display = "flex";
    document.getElementById(pageName).style.flexDirection = "column";
  }
  // Add the specific color to the button used to open the tab content
  elmnt.style.animation = "fade-in";
  lastPageName = pageName;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

