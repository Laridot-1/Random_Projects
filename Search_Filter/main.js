let form = document.querySelector(".form")
let input = form.querySelector(".search_bar")
let items = document.querySelectorAll("li")
let menu = document.querySelector(".menu")

form.addEventListener("submit", e => {
  e.preventDefault()
})

input.addEventListener("keyup", () => {
/* For every key up event fired, the input returns just one character */

  let s = input.value //Store the character
  
  menu.innerHTML = ""  /* Delete every item in the list assuming the input doesn't match any item */
  
  
  items.forEach(i => { //Get all the list items
    let list = i.innerHTML //Get their values
    if(list.toLowerCase().includes(s.toLowerCase()) && s !== "") /* If their value in lowercase has the inputed character in lowercase also */ {
      menu.innerHTML += `<li>${list}</li>` /* add the values back to the menu{The container} */
    }
  })
  
  if(s === "") /* Since the menu has been cleared, if the search bar is cleared nothing would show up */ {
    items.forEach(i => {
      menu.innerHTML += `<li>${i.innerHTML}</li>` /* To handle the case if nothing shows up: looping through the items again and adding everything back to the menu {The container} since there are no inputs and matches */
    })
  }
})
