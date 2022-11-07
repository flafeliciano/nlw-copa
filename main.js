
function createGame(play1, hora, play2) {
    return `
    <li>
        <img src="./figs/icon-${play1}.svg" alt="Bandeira do ${play1}">
        <strong>${hora}</strong>
        <img src="./figs/icon-${play2}.svg" alt="Bandeira da ${play2}">
    </li>

    `
}
    
let espere = -0.2;
function createCard(date, day, games) {
    espere = espere + 0.2;
    return `
        <div class="card" style="animation-delay: ${espere}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
    
}

document.querySelector('#cards').innerHTML =     
        createCard("24/11", "Quinta",
            createGame('Brazil', '16:00', 'Serbia')) +
        createCard("28/11", "segunda", 
            createGame('Brazil', '13:00', 'Switzerland') +
            createGame('Serbia', '15:00', 'cameroon')) +
        createCard("02/12", "sexta",
            createGame('Brazil', '16:00', 'Cameroon'))