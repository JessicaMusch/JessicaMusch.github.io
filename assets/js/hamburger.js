// Gets called via onclick event for .hamburger
function toggleNav(elem) {
    // Get class list of current element and toggle given class to be there or not
    elem.classList.toggle("active");

    // Get sibling element of current one and do the same as above
    elem.nextElementSibling.classList.toggle("active");
}

function openTab(evt, identifier) { // called when tab buttons is clicked, shows content
    let i, tabcontent, tablinks; // Declare all variables
    // Get all elements with class="tabcontent" and remove the class "active"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
    }
    // Show the current tab, and highlight the button that opened the tab
    document.getElementById(identifier).classList.add("active");
    evt.currentTarget.classList.add("active");
}