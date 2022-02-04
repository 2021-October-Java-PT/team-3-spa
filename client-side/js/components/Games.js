export default function Games(games) {
    return `
        <h1>Our Games</h1>
        
        <ul class='games-list'>
        ${games
          .map((game) => {
            return `
            <li class='games-list__title'>${game.name}
              <input type='hidden' id='gameId' value=${game.id} />
            </li>
            `;
          })
          .join('')}
        </ul>  
        <iframe src="https://giphy.com/embed/k5PBzy5e7mLogC2XXu" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/theoffice-episode-14-the-office-tv-k5PBzy5e7mLogC2XXu">via GIPHY</a></p>
        `;
  }