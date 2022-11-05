function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />

      <strong>${hour}</strong>

      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  ` 
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11",
     "quinta", 
      createGame("brasil", "16:00", "serbia")) +
    
    createCard(
      "28/11",
      "segunda",

      createGame(
        "switzerland", 
        "13:00", 
        "brasil"
      ) +
      
      createGame(
        "portugal", 
        "16:00", 
        "uruguay"
      )
    ) +

    createCard(
      "02/12", 
      "sexta", 
      createGame(
        "brasil", 
        "16:00", 
        "cameroon"
      ))


const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
  bg: getStyle(html, "--bg-image"),
  bdCard: getStyle(html, "--bd-card"),
  bdH2: getStyle(html, "--bd-h2"),
  bgCard: getStyle(html, "--bg-card")
}

const darkMode = {
  bg: "--bg-blue",
  bdCard: "#338AF3",
  bdH2: "#338AF3",
  bgCard: "#202024"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = colors => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
