export default function Games(games) {
    return `
        <h1>Our Games</h1>
        <ul class='games-list'>
        ${games
          .map((game) => {
            return `
            <li class='games-list__title'>${game.title}
              <input type='hidden' id='gameId' value=${game.id} />
            </li>
            `;
          })
          .join('')}
        </ul>  
        `;
  }