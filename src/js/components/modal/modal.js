import { refs } from '../../refs/refs';
import { FetchApiMovies } from '../../api/fetchApiMovies';
import { renderMovieCard } from '../../templates/movieCard';
import { Loader } from '../loader/loader';

const loader = new Loader();
const { fullFetch } = new FetchApiMovies();

refs.moviesList.addEventListener('click', onFilmClick);
refs.filmOverlay.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModal);

export async function onFilmClick(e) {
  e.preventDefault();
  e.stopPropagation();

  loader.on();

  if (e.target === e.currentTarget) {
    return;
  }

  const selectedMovie = e.target.closest('li');
  const data = await fullFetch(selectedMovie.id);

  openModal();
  renderMovieCard(data);
  loader.off();
}

function closeModal(e) {
  if (e.code === 'Escape' || e.target === e.currentTarget) {
    refs.modal.classList.add('off');
    refs.filmOverlay.classList.add('off');
  }
}

function openModal() {
  refs.modal.classList.remove('off');
  refs.filmOverlay.classList.remove('off');
}
