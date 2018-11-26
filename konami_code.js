const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0
let ignorer = 0

function init() {
  const outputTarget = document.querySelector('#output-pane')

  function konamiKeyHandler(e) {
      outputTarget.innerHTML = `${e.key}`;
      console.log(e.key)
      if (codes[index] === e.key) {
        index++
        if (index === 10){
          alert("It's an older code, sir-- but it checks out.")
        }
      } else {
        index = 0
      }
  }
  document.body.addEventListener('keydown', konamiKeyHandler)
}
