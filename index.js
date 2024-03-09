const btn = document.querySelector('#btn');

const random = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

btn.addEventListener('click', () => {
  btn.style.left = `${random(0, 45)}%`;
  btn.style.top = `${random(0, 45)}%`;
});

btn.addEventListener('mouseenter', () => {
  btn.style.left = `${random(0, 45)}%`;
  btn.style.top = `${random(0, 45)}%`;
});
