'use strict';

document.addEventListener('click', (evt) => {
  const wallElement = document.querySelector('.wall');

  if (!wallElement.contains(evt.target)) {
    return;
  }

  const spiderElement = document.querySelector('.spider');
  const spiderCenterX = spiderElement.clientWidth / 2;
  const spiderCenterY = spiderElement.clientHeight / 2;

  const wallRect = wallElement.getBoundingClientRect();

  const spiderCoordinates = {
    x: evt.clientX - wallRect.left - spiderCenterX,
    y: evt.clientY - wallRect.top - spiderCenterY,
  };

  spiderCoordinates.x = Math.max(
    0,
    Math.min(
      spiderCoordinates.x,
      wallElement.clientWidth - spiderElement.clientWidth,
    ),
  );

  spiderCoordinates.y = Math.max(
    0,
    Math.min(
      spiderCoordinates.y,
      wallElement.clientHeight - spiderElement.clientHeight,
    ),
  );

  spiderElement.style.left = spiderCoordinates.x + 'px';
  spiderElement.style.top = spiderCoordinates.y + 'px';
});
