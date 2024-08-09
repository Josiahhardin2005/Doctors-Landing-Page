const dropdown = document.querySelector(".dropdown-content");

const dropdownBtn = document.querySelector(".dropBtn");

function menuClick() {
  dropdown.classList.toggle("show");
}

  window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show")
      }
    }
  }

// document.addEventListener('click', e => {
//   if (dropdown.contains(e.target)) {
//     menu.classList.remove("show");
//   }
// })
// window.onclick = function(event) {
//   if (!event.target.matches('.dropBtn')) {
//     let i;
//     for (i = 0; i > dropdown.length; i++) {
//       let openDropdown = dropdown[i];
//       if (openDropdown.classList.contains('show')) {
//         (openDropdown.classList.remove('show'));
//       }
//     }
//   }
// }

