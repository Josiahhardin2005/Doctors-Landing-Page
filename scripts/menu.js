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

