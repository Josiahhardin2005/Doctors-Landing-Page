const question = document.querySelectorAll(".accordion-que")
const answer = document.querySelectorAll(".panel"); 

question.forEach((que) => {
  que.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    content.classList.toggle("active")
  };
});
