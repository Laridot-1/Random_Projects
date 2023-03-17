let body = document.body
let text = "I am a boy and i love programming..."
let i = 0

function fn() {
  body.innerHTML += text.charAt(i)
  i++
}

let id = setInterval(fn, 100)

if(i >= text.length) {
  clearInterval(id)
}