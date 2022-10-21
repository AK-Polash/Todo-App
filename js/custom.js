let input = document.querySelector(".input");
let addButton = document.querySelector(".button");
let ul = document.querySelector(".ul");
let mainArr = [];

addButton.addEventListener("click", () => {
  mainArr.push(input.value);
  todo();
});

function todo() {
  ul.innerHTML = "";
  mainArr.map((item) => {
    ul.innerHTML += `<li class="list"> <span class="todo__title"> ${item} </span> <button class="delete"> Delete Task </button> </li>`;
  });

  let removeButton = document.querySelectorAll(".delete");
  let removeButtonArray = Array.from(removeButton);
  removeButtonArray.map((button, index) => {
    button.addEventListener("click", () => {
      mainArr.splice(index, 1);
      todo();
    });
  });
}
