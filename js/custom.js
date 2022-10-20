let input = document.querySelector(".input");
let button = document.querySelector(".button");
let ul = document.querySelector(".ul");

button.addEventListener("click", () => {
  todo();
});

function todo() {
  ul.innerHTML += `<li> ${input.value} <button class="delete"> Delete Task </button> </li>`;
}
