let btn = document.querySelector(".btn")
let body = document.body
let rgb = document.querySelector(".rgb")
let hsl = document.querySelector(".hsl")

function randomColor(num) {
  return Math.floor(Math.random() * num)
}

btn.addEventListener("click", () => {
  let color = randomColor(361)
  let saturation = randomColor(101)
  let lightness = randomColor(101)
  
  
  body.style.backgroundColor = 
  `hsl(${color} ${saturation}% ${lightness}%)`
  rgb.innerHTML = body.style.backgroundColor
  hsl.innerHTML = 
  `hsl(${color}, ${saturation}%, ${lightness}%)`
})
