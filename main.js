function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" /><strong>${hour}</strong><img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard('20/11', 'domingo', createGame('qatar', '13:00', 'ecuador')) +
  createCard(
    '21/11',
    'segunda',
    createGame('england', '10:00', 'iran') +
      createGame('senegal', '13:00', 'netherlands') +
      createGame('usa', '16:00', 'wales')
  ) +
  createCard(
    '21/11',
    'segunda',
    createGame('england', '10:00', 'iran') +
      createGame('senegal', '13:00', 'netherlands') +
      createGame('usa', '16:00', 'wales')
  )
