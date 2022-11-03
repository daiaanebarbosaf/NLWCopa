function createGame() {
  return `
    <li>
      <img src="./assets/icon-brasil.svg" alt="Bandeira do Brasil" />

      <strong>16:00</strong>

      <img src="./assets/icon-serbia.svg" alt="Bandeira da Serbia" />
    </li>
  `
}

function createCard(date, day, games){
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW Copa" />
  </header>
  <main id="cards">
    ${createCard("24/11", "quinta",
      createGame()
    )}
    ${createCard("28/11", "segunda")}
    ${createCard("02/12", "sexta")}
  </main>
`
