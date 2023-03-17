const display = document.querySelector(".display")
const btns = document.querySelectorAll(".btn")

let count = 0

//Solution 1
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    
    if(btn.classList.contains("increase")){
      count++
      if(count > 0){
        display.style.color = "green"
      }
    }
    
    else if(btn.classList.contains("decrease")){
      count--
      if(count < 0){
        display.style.color = "red"
      }
    }
    
    else if(btn.classList.contains("reset")){
      count = 0
    }
    
    if(count === 0) {
      display.style.color = "black"
    }
    display.textContent = count
  })
})



//Solution 2
/* 
const decrease = document.querySelector(".decrease")
const increase = document.querySelector(".increase")
const reset = document.querySelector(".reset")

decrease.addEventListener("click", () => {
  count--
  if(count < 0) {
    display.style.color = "red"
  }
  if(count === 0) {
    display.style.color = "black"
  }
  display.textContent = count;
})

increase.addEventListener("click", () => {
  count++
  if(count > 0) {
    display.style.color = "green"
  }
  if(count === 0) {
    display.style.color = "black"
  }
  display.textContent = count;
})

reset.addEventListener("click", () => {
  count = 0
  if(count === 0) {
    display.style.color = "black"
  }
  display.textContent = count;
})
 */










