const games = window.GAMES || [];
const params = new URLSearchParams(window.location.search);
const gameId = params.get('game');

const selectedGame = games.find((game) => game.id === gameId) || games[0];

const title = document.getElementById('play-title');
const description = document.getElementById('play-description');
const officialLink = document.getElementById('official-link');
const frame = document.getElementById('game-frame');

if (selectedGame) {
  title.textContent = `${selectedGame.title} - Arcade Vault`;
  description.textContent = selectedGame.description;
  officialLink.href = selectedGame.url;
  frame.src = selectedGame.url;
  frame.title = `${selectedGame.title} frame`;
} else {
  title.textContent = 'Game not found - Arcade Vault';
  description.textContent = 'No games are currently configured.';
  officialLink.removeAttribute('href');
}
