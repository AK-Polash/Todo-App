let input = document.querySelector(".input");
let addButton = document.querySelector(".button");
let ul = document.querySelector(".ul");
let mainArr = [];

addButton.addEventListener("click", () => {
  todo();
});

function todo() {
  ul.innerHTML += `<li> <span> ${input.value} </span> <button class="delete"> Delete Task </button> </li>`;
  let listValue = ul.lastElementChild.children[0].innerHTML;
  mainArr.push(listValue);
  console.log(mainArr);

  let removeButton = document.querySelectorAll(".delete");
  let buttonArr = Array.from(removeButton);

  buttonArr.map((button, index) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
      mainArr.splice(index, 1);
      console.log(mainArr);
    });
  });
}

// next target: html to array korte hobe
