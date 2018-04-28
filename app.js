/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {
    var nav = document.getElementById("topNav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }
}

// function navBar() {
//   let nav = document.querySelector('.nav'); 
//   if (nav.classList === 'nav') {
//     nav
//   }
// }

