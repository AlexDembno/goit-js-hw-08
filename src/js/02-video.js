import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

loadTime();

player.on('timeupdate', throttle(setTime, 1000));

function setTime(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

function getTime() {
  const upLocal = localStorage.getItem('videoplayer-current-time');
  return upLocal === null ? undefined : JSON.parse(upLocal);
}

function loadTime() {
  const qwe = getTime();
  player.setCurrentTime(qwe.seconds);
}
