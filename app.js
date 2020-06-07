LoadEvents();
const todoul = document.getElementById("todoul");
// console.log(todoul);

function LoadEvents() {
  document.getElementById('clsall').addEventListener('click', clearList);
  document.getElementById('listform').addEventListener('submit', addList);
  document.querySelector('ul').addEventListener('click', sil);
}


function clearList(e) {
  e.preventDefault();
  todoul.innerHTML = null;
}

function addList(e) {
  e.preventDefault();
  let inp = document.getElementById("task").value;
  let liv = document.createElement("li");

  let xx = document.createElement("span");
  xx.setAttribute("class", "delete");
  xx.textContent = 'x';
  liv.appendChild(xx);

  let cek = document.createElement("input");
  cek.setAttribute("type", "checkbox");
  liv.appendChild(cek);

  let etiket = document.createElement("label");
  etiket.textContent = inp;
  liv.appendChild(etiket);

  // liv.textContent = inp;
  todoul.appendChild(liv);
}

function sil(e) {
  let sil = e.target.parentNode;
  let baba = sil.parentNode;
  baba.removeChild(sil);
}