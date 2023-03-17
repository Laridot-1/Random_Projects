let def = document.querySelector(".default")
let inputs = document.querySelectorAll("input[name]")
let btn = document.querySelector("input[type=button]")
let reg = {
  "first-name":/^[a-zA-z]+$/,
  "last-name":/^[a-zA-z]+$/,
  "email": /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  "password": /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_]).{8,}$/
}

inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    let parent = e.target.parentElement
    let name = e.target.getAttribute("name")
    let value = e.target.value
    let para = e.target.nextElementSibling
    let icon = para.nextElementSibling
    let validate = reg[name].test(value)
    
    if(name === "first-name" || name === "last-name") {
      if(validate) {
        parent.classList.remove("inval")
        parent.classList.add("val")
      }else {
        parent.classList.add("inval")
        parent.classList.remove("val")
        para.textContent = "Name cannot be empty, Name cannot contain spaces, Name cannot contain digits or any special characters"
      }
    }
    else if(name === "email") {
      if(validate) {
        parent.classList.remove("inval")
        parent.classList.add("val")
      }else {
        parent.classList.add("inval")
        parent.classList.remove("val")
        para.textContent = `Enter a valid email address`
      }
    }
    else if(name === "password") {
      if(validate) {
        parent.classList.remove("inval")
        parent.classList.add("val")
      }else {
        parent.classList.add("inval")
        parent.classList.remove("val")
        para.textContent = `Password must contain at least one Uppercase letter, one Lowercase letter, one digit, one special character and must be at least 10 characters long`
      }
    }
       
  })
})

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "hsl(154 59% 51% / 0.7)"
  setTimeout(() => {
    btn.style.backgroundColor = "var(--green)"
  }, 150)
})

def.addEventListener("click", e => {
  e.preventDefault()
})
