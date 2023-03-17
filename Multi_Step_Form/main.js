//DOM Content
let parse = [
  {
    type: "text",
    placeholder: "Enter your first name",
    name: "first-name",
    pattern: /^\S+$/,
    err: "Name cannot contain any space characters"
  },
  {
    type: "text",
    placeholder: "Enter your last name",
    name: "last-name",
    pattern: /^\S+$/,
    err: "Name cannot contain any space characters"
  },
  {
    type: "email",
    placeholder: "Enter your email address",
    name: "email",
    pattern: /^\S+[\S?]{0,}@\S+[\S?]{0,}$/,
    err: "Enter a valid email address"
  },
  {
    type: "password",
    placeholder: "Enter your password",
    name: "password",
    pattern: /.{8,}/,
    err: "Password must be at least 8 characters long"
  }
]

//DOM Elements
let fm = document.querySelector("form")
let input = document.querySelector(".input")
let error = document.querySelector(".error")
let errMsg = error.querySelector(".err-msg")
let next = document.querySelector("#next")
let prev = document.querySelector("#prev")
let btn = document.querySelector("#signup")
let t_c = document.querySelector("#tc")
let finish = document.querySelector(".finish")
let cont = document.querySelector(".container")
let head = document.querySelector(".h1")
let loader = document.querySelector(".loader")
let wait = document.querySelector(".wait")

//Trackers
let item = 0
let unique = parse[item].name

//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  input.setAttribute("placeholder", parse[item].placeholder)
  next.style.display = "block"
})

input.addEventListener("invalid", e => e.preventDefault())

input.addEventListener("keypress", e => {
  if(e.key === "Enter") {
    validate()
    e.preventDefault()
  }
})

input.addEventListener("keyup", e => {
  let check = e.target.value
  if(e.key === "Enter") {
    return
  }
  if(parse[item].pattern.test(check)) {
    valid()
  }else {
    invalid()
  }
})

input.addEventListener("blur", blur)

next.addEventListener("click", validate)

prev.addEventListener("click", previous)

btn.addEventListener("click", flip)

//Functions
function validate() {
  let user = input.value
  if(parse[item].pattern.test(user)) {
    parse[item][unique] = user
    item++
    setTimeout(()=>prev.style.display = "block", 200)
    valid()
    setTimeout(display, 200)
    end()
  }else {
    invalid()
  }
}

function valid() {
  input.style.border = "1px solid var(--green)"
  error.style.display = "none"
}

function invalid() {
  input.style.border = "1px solid var(--red)"
  errMsg.textContent = parse[item].err
  error.style.display = "flex"
}

function display() {
  if(item < parse.length) {
    if(parse[item][unique] !== undefined) {
      input.setAttribute("type", parse[item].type)
      input.value = parse[item][unique]
    }else {
      input.value = ""
      input.setAttribute("placeholder", parse[item].placeholder)
      input.setAttribute("type", parse[item].type)
      input.style.border = "none"
    }
  }
}

function previous() {
  if(item === parse.length) {
    input.style.display = "block"
    next.style.display = "block"
    btn.style.display = "none"
    t_c.style.display = "none"
    display()
  }
  item--
  if(item <= 0) {
    item = 0
    prev.style.display = "none"
  }
  display()
  input.value = parse[item][unique]
  error.style.display = "none"
  input.style.border = "none"
}

function blur() {
  if(input.value === "") {
    input.style.border = "none"
    error.style.display = "none"
  }
}

function end() {
  if(item === parse.length) {
    next.style.display = "none"
    btn.style.display = "block"
    input.style.display = "none"
    input.style.border = "none"
    t_c.style.display = "block"
  }
}

function flip(e) {
  e.preventDefault()
  head.style.display = "none"
  cont.classList.add("show")
  finish.textContent = `Welcome ${parse[0][unique]}`
  setTimeout(function () {
    finish.textContent = ""
    loader.style.display = "block"
    wait.textContent = `Wait while we process your information`
  }, 2000)
}
//151 lines of code, 174 lines + comments and spaces
