const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');
const container = document.querySelector('.container');

const hoverHandler = (hoverside, unHoverside) => {
  container.classList.add(hoverside);
  container.classList.remove(unHoverside);
};

leftSide.addEventListener(
  'mouseenter',
  hoverHandler.bind(this, 'hover-left', 'hover-right')
);

rightSide.addEventListener(
  'mouseenter',
  hoverHandler.bind(this, 'hover-right', 'hover-left')
);
