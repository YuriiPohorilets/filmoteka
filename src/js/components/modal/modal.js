import { refs } from '../../refs/refs';

refs.moviesList.addEventListener('click', onFilmClick);

export function onFilmClick(e) {
  e.preventDefault();
  e.stopPropagation();

  if (e.target === e.currentTarget) {
    return;
  }

  const selectedMovie = e.target.closest('li');
  console.log(selectedMovie);
  openModal();
}

function closeModal() {
  refs.modal.classList.add('off');
  refs.filmOverlay.classList.add('off');
}

function openModal() {
  refs.modal.classList.remove('off');
  refs.filmOverlay.classList.remove('off');
}
