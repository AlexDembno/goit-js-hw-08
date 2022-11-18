import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

loadTime();

player.on('timeupdate', throttle(setTime, 1000));

function setTime(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

function loadTime() {
  const setLocal = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (setLocal) {
    player.setCurrentTime(setLocal.seconds);
  }
}
