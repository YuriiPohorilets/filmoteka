import { refs } from '../../refs/refs';

export class Loader {
  on() {
    refs.loader.classList.remove('off');
    refs.overlay.classList.remove('off');
  }

  off() {
    refs.loader.classList.add('off');
    refs.overlay.classList.add('off');
  }
}
