'use strict';

document.addEventListener('click', (evt) => {
  const wall = document.querySelector('.wall');

  if (!wall.contains(evt.target)) {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderCenterX = spider.clientWidth / 2;
  const spiderCenterY = spider.clientHeight / 2;

  const wallRect = wall.getBoundingClientRect();

  const coordinates = {
    x: evt.clientX - wallRect.left - spiderCenterX,
    y: evt.clientY - wallRect.top - spiderCenterY,
  };

  coordinates.x = Math.max(
    0,
    Math.min(coordinates.x, wall.clientWidth - spider.clientWidth),
  );

  coordinates.y = Math.max(
    0,
    Math.min(coordinates.y, wall.clientHeight - spider.clientHeight),
  );

  spider.style.left = `${coordinates.x}px`;
  spider.style.top = `${coordinates.y}px`;
});
