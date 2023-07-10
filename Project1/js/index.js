//Project Documentation first second and third sub content pages
//Get content without refreshing the page

function showFirstTabs(evted, tabName) {
  // Declare all variables
  var i, tinytap1, smalltab1;

  // Get all elements with class="tinytap1" and hide them
  tinytap1 = document.getElementsByClassName("tinytap1");
  for (i = 0; i < tinytap1.length; i++) {
    tinytap1[i].style.display = "none";
  }

  // Get all elements with class="smalltab1" and remove the class "active"
  smalltab1 = document.getElementsByClassName("smalltab1");
  for (i = 0; i < smalltab1.length; i++) {
    smalltab1[i].className = smalltab1[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evted.currentTarget.className += " active";
}
