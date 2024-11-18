'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  // Ensure the click event happens within the wall element
  if (!wall.contains(e.target)) {
    return;
  }

  const spider = document.querySelector('.spider');
  const centerSpiderX = spider.clientWidth / 2;
  const centerSpiderY = spider.clientHeight / 2;

  // Get the wall's bounding rectangle
  const wallRect = wall.getBoundingClientRect();

  // Calculate the coordinates relative to the wall
  const coordinates = {
    x: e.clientX - wallRect.left - centerSpiderX,
    y: e.clientY - wallRect.top - centerSpiderY,
  };

  // Constrain the spider's position within the bounds of the wall
  coordinates.x = Math.max(
    0,
    Math.min(coordinates.x, wall.clientWidth - spider.clientWidth),
  );

  coordinates.y = Math.max(
    0,
    Math.min(coordinates.y, wall.clientHeight - spider.clientHeight),
  );

  // Move the spider to the new position
  spider.style.left = coordinates.x + 'px';
  spider.style.top = coordinates.y + 'px';
});
