function createCard(){
  return`
  
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW Copa" />
  </header>
  <main id="cards">
    <div class="card">
      <h2>24/11 <span>quinta</span></h2>
      <ul>
        <li>
          <img src="./assets/icon-brasil.svg" alt="Bandeira do Brasil" />
          <strong>16:00</strong>
          <img src="./assets/icon-serbia.svg" alt="Bandeira da Serbia" />
        </li>
      </ul>
    </div>
  </main>
`
