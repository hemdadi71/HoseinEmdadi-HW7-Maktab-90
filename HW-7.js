'use strict';

import { sorces } from './sorces.js';
('use strict');

const select = document.querySelectorAll('.select');
const source = document.getElementById('source');
const video = document.getElementById('video');
const play = document.querySelectorAll('.play');

const handleSelectCover = e => {
  e.target.parentElement.childNodes[5].style.display = 'block';
  e.target.parentElement.childNodes[5].childNodes[3].innerHTML = `${e.target.value}`;
};

const handlesources = e => {
  console.log(e.currentTarget);
  const products_tr = e.currentTarget.parentElement.parentElement;
  for (let i in sorces) {
    if (products_tr.dataset.name === sorces[i].name) {
      source.setAttribute('src', sorces[i].sorce);
      source.setAttribute('type', 'video/mp4');
    }
  }
  document.documentElement.scrollTop = 0;
  video.load();
  video.play();
};

select.forEach(elem => elem.addEventListener('change', handleSelectCover));
play.forEach(elem => elem.addEventListener('click', handlesources));
