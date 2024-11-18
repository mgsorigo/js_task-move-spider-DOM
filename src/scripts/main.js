'use strict';

document.addEventListener('click', (clickEvent) => {
  const wall = document.querySelector('.wall');

  if (!wall || !wall.contains(clickEvent.target)) {
    return;
  }

  const spider = document.querySelector('.spider');

  if (!spider) {
    return;
  }

  const centerSpiderX = spider.clientWidth / 2;
  const centerSpiderY = spider.clientHeight / 2;

  const wallRect = wall.getBoundingClientRect();

  let x = clickEvent.clientX - wallRect.left - centerSpiderX;
  let y = clickEvent.clientY - wallRect.top - centerSpiderY;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.clientWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.clientHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
