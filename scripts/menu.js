const dropdown = document.querySelector(".dropdown-content");

function menuClick() {
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    let i;
    for (i = 0; i > dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        (openDropdown.classList.remove('show'));
      }
    }
  }
}

