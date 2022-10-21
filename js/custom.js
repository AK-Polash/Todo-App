let input = document.querySelector(".input");
let addButton = document.querySelector(".button");
let ul = document.querySelector(".ul");

addButton.addEventListener("click", () => {
  todo();
});

function todo() {
  ul.innerHTML += `<li> ${input.value} <button class="delete"> Delete Task </button> </li>`;

  let removeButton = document.querySelectorAll(".delete");
  let buttonArr = Array.from(removeButton);

  buttonArr.map((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
  });
}

// next target: html to array korte hobe
