let input = document.querySelector(".input");
let addButton = document.querySelector(".button");
let saveChangeButton = document.querySelector(".button__two");
let ul = document.querySelector(".ul");
let mainArr = [];
saveChangeButton.style.display = "none";

addButton.addEventListener("click", () => {
  mainArr.push(input.value);
  todo();
  input.value = "";
});

function todo() {
  ul.innerHTML = "";
  mainArr.map((item) => {
    ul.innerHTML += `<li class="list"> <span class="todo__title"> ${item} </span> <button class="delete"> Delete </button> <button class="edit"> Edit Task </button>`;
  });

  // Remove Buttons:
  let removeButton = document.querySelectorAll(".delete");
  let removeButtonArray = Array.from(removeButton);
  removeButtonArray.map((button, index) => {
    button.addEventListener("click", () => {
      mainArr.splice(index, 1);
      todo();
    });
  });

  // Edit Buttons:
  let editButton = document.querySelectorAll(".edit");
  let editButtonArray = Array.from(editButton);

  editButtonArray.map((editItem, index) => {
    editItem.addEventListener("click", () => {
      input.value = mainArr[index];
      addButton.style.display = "none";
      saveChangeButton.style.display = "block";

      // Save Button:
      saveChangeButton.addEventListener("click", () => {
        saveChangeButton.style.display = "none";
        addButton.style.display = "block";
        mainArr.splice(index, 1, input.value);
        console.log(index);
        console.log(mainArr);
        todo();
      });
      todo();
    });
  });
}
