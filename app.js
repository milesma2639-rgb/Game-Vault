const games = [
  {
    title: 'Cookie Clicker',
    description: 'Official Cookie Clicker website by Orteil / DashNet.',
    url: 'https://orteil.dashnet.org/cookieclicker/',
  },
  {
    title: 'Snake (Google Snake)',
    description: 'Google Snake game launch page mirror listing.',
    url: 'https://snake.googlemaps.com/',
  },
  {
    title: 'Stickman Hook',
    description: 'Official/primary website for Stickman Hook game information and play.',
    url: 'https://www.crazygames.com/game/stickman-hook',
  },
  {
    title: 'Bank Robbery',
    description: 'Public game listing page for Bank Robbery browser game.',
    url: 'https://www.crazygames.com/game/bank-robbery',
  },
  {
    title: 'Slope',
    description: 'Public website listing for the Slope game.',
    url: 'https://www.crazygames.com/game/slope',
  },
];

const grid = document.getElementById('game-grid');
const template = document.getElementById('game-card-template');

for (const game of games) {
  const node = template.content.cloneNode(true);
  const title = node.querySelector('.game-title');
  const description = node.querySelector('.game-description');
  const playLink = node.querySelector('.play-link');
  const frame = node.querySelector('.game-frame');

  title.textContent = game.title;
  description.textContent = game.description;

  playLink.href = game.url;
  frame.src = game.url;
  frame.title = `${game.title} preview`;

  grid.appendChild(node);
}
