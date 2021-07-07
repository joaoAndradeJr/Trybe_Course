function makeMadLib() {
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;
  let p = document.getElementById("story");
  p.innerHTML = person + " " + noun + " " + adjective;
}

let botao = document.getElementById('lib-button');
botao.addEventListener("click", makeMadLib);