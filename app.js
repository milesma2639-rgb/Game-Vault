const games = window.GAMES || [];

const grid = document.getElementById('game-grid');
const template = document.getElementById('game-card-template');

for (const game of games) {
  const node = template.content.cloneNode(true);
  const title = node.querySelector('.game-title');
  const description = node.querySelector('.game-description');
  const playHereLink = node.querySelector('.play-here-link');
  const playLink = node.querySelector('.play-link');

  title.textContent = game.title;
  description.textContent = game.description;

  playHereLink.href = `play.html?game=${encodeURIComponent(game.id)}`;
  playLink.href = game.url;

  grid.appendChild(node);
}
const games = window.GAMES || [];

const grid = document.getElementById('game-grid');
const template = document.getElementById('game-card-template');

for (const game of games) {
  const node = template.content.cloneNode(true);
  const title = node.querySelector('.game-title');
  const description = node.querySelector('.game-description');
  const playHereLink = node.querySelector('.play-here-link');
  const playLink = node.querySelector('.play-link');

  title.textContent = game.title;
  description.textContent = game.description;

  playHereLink.href = `play.html?game=${encodeURIComponent(game.id)}`;
  playLink.href = game.url;

  grid.appendChild(node);
}
