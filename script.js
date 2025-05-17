let send = document.querySelector("#send");
let list = document.querySelector("#list");
let zapis = document.querySelector("#zapis");
let zag = document.querySelector(".main-h1");



send.addEventListener("click", () => {
    
  let newElemnt = document.createElement("li");
  newElemnt.className = "list-item";

  let span = document.createElement("span");
  span.textContent = zapis.value;
  newElemnt.appendChild(span);
  
  localStorage.setItem(zapis.value , span);
  let div = document.createElement("div");
  div.className = "edit-delete";
  newElemnt.appendChild(div);

  let editBtn = document.createElement("button");
    editBtn.textContent = "🖊";
    editBtn.className = "edit";
  div.appendChild(editBtn);

  let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🪣";
    deleteBtn.className = "delete";
  div.appendChild(deleteBtn);

  editBtn.addEventListener("click", () => {
    span.textContent = prompt(
      `Изменить '${span.textContent}' на следующий текст`
    );
  });

  deleteBtn.addEventListener("click", () => {
    newElemnt.remove();
  });

  if (zapis.value == "") {
    alert("Вы ничего не ввели!!!!");
  } else {
    list.appendChild(newElemnt);
    zapis.value = "";
  }
});


let dark = document.querySelector("#buttonight");

dark.addEventListener("click", () => {
    zapis.classList.toggle("input1");
    zag.classList.toggle("zag1");
    document.body.classList.toggle("body1");
     span.classList.toggle("span1");
});
function saveToLocalStorage() {
  const input = document.getElementById('zapis').value;
  localStorage.setItem('myText', input);
};
