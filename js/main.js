'use strict';

{
  const header = document.getElementById('header');
  const btn = document.querySelector('.toggle-btn');
  const mask = document.getElementById('mask');

  btn.addEventListener('click', () => {
    header.classList.toggle('open')
  });

  mask.addEventListener('click', () => {
    header.classList.toggle('open')
  });
}

