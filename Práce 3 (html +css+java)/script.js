/* Vyplňování kolonek*/

function validatePasswords() {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password1 = document.getElementById("password1").value
  const password2 = document.getElementById("password2").value
  const nameMessageElement = document.getElementById("nameMessage")
  const emailMessageElement = document.getElementById("emailMessage")
  const messageElement = document.getElementById("message")

  if (name.length < 5) {
    nameMessageElement.textContent = "Jméno je příliš krátké."
    nameMessageElement.className = "message red"
  } else {
    nameMessageElement.textContent = ""
    nameMessageElement.className = "message"
  }

  if (!email.includes("@")) {
    emailMessageElement.textContent = "Emailová adresa je chybná."
    emailMessageElement.className = "message red"
  } else {
    emailMessageElement.textContent = ""
    emailMessageElement.className = "message"
  }

  if (password1 === "" || password2 === "") {
    messageElement.textContent = "Je potřeba vyplnit všechny kolonky."
    messageElement.className = "message orange"
  } else if (password1 !== password2) {
    messageElement.textContent = "Hesla se neshodují."
    messageElement.className = "message red"
  } else if (password1.length < 8 || password2.length < 8) {
    messageElement.textContent = "Heslo je příliš krátké."
    messageElement.className = "message red"
  } else {
    messageElement.textContent = "Hesla jsou shodná."
    messageElement.className = "message green"
  }
}

/* Přepínání pozadí a symbolu*/

function changeBackground() {
  let body = document.querySelector("body")
  let symbol = document.getElementById("symbol")

  if (
    body.style.backgroundImage ===
    'url("/images/f-a-herold-summervillage-day.jpg")'
  ) {
    body.style.backgroundImage =
      'url("/images/f-a-herold-summervillage-night.jpg")'
    symbol.classList.remove("fa-sun")
    symbol.classList.add("fa-moon")
  } else {
    body.style.backgroundImage =
      'url("/images/f-a-herold-summervillage-day.jpg")'
    symbol.classList.remove("fa-moon")
    symbol.classList.add("fa-sun")
  }
}

/* tlačítko nahoru*/

window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("backToTopButton")
  if (window.pageYOffset > 500) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
})

document
  .getElementById("backToTopButton")
  .addEventListener("click", function (e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
