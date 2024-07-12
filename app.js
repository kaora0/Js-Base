/* Theory

const array = [1, 2, 3, 5, 20, 42];
const arrayDif = ["a", "b", "c", null, 12];
// const array = new Array(1, 2, 3, 5, 20, 42)

array[0] = "Privet";
array[array.length] = "becon";

console.log(array);
console.log(array.length);
console.log(arrayDif[3]);
console.log(arrayDif[arrayDif.length - 1]);
*/

/* Object Theory
const person = {
  firstName: "Katya", // Ключ и значение ключа
  year: 2003,
};

console.log(person.year);
console.log(person["year"]);*/

/*function render() {
  // for (let i = 0; i < notes.length; i++) {
  //   list$.insertAdjacentHTML("beforeend", getNote(notes[i]));
  // }

  for (let note of notes) {
    list$.insertAdjacentHTML("beforeend", getNote(note));
  }
}*/

const titleInp$ = document.getElementById("titleInp");
const create$ = document.getElementById("create");
const list$ = document.getElementById("list");

const notes = [
  {
    title: "Заметка 1",
    completed: false,
  },
  {
    title: "Заметка 2",
    completed: false,
  },
];

function render() {
  list$.innerHTML = null;
  for (let i = 0; i < notes.length; i++) {
    list$.insertAdjacentHTML("beforeend", getNote(notes[i], i));
  }
  if (notes.length === 0) {
    list$.innerHTML = "<p>Нет заметок</p>";
  }
}
render();

function getNote(note, i) {
  return `
     <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? "warning" : "success"
            }" data-index = "${i}" data-type="doneOrNot">&check;</span>
            <span class="btn btn-small btn-danger" data-index = "${i}" data-type="remove">&times;</span>
          </span>
        </li>
     `;
}

list$.onclick = function (event) {
  console.log(event.target.dataset.index);
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "doneOrNot") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
    render();
  }
};

create$.onclick = function () {
  if (titleInp$.value) {
    const newNote = {
      title: titleInp$.value,
      completed: false,
    };
    notes.push(newNote);
    render();
    titleInp$.value = null;
  }
};

console.log(notes);
