const question = document.querySelectorAll(".accordion-que")
const answer = document.querySelectorAll(".panel"); 

question.forEach((que) => {
  que.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    content.classList.toggle("active")

    // if(content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // }
  };
});

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classlist.toggle("active");

//     const panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
