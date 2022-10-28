import { refs } from '../../refs/refs';
import { FetchApiMovies } from '../../api/fetchApiMovies';
import { renderMovieCard } from '../../templates/movieCard';
import { Loader } from '../loader/loader';

const loader = new Loader();
const { fullFetch } = new FetchApiMovies();

refs.moviesList.addEventListener('click', onFilmClick);

export async function onFilmClick(e) {
  e.preventDefault();
  e.stopPropagation();

  loader.on();

  if (e.target === e.currentTarget) {
    return;
  }

  const selectedMovie = e.target.closest('li');
  console.log(selectedMovie.id);

  const data = await fullFetch(selectedMovie.id);

  openModal();
  renderMovieCard(data);
  console.log(data);
  loader.off();
}

function closeModal() {
  refs.modal.classList.add('off');
  refs.filmOverlay.classList.add('off');
}

function openModal() {
  refs.modal.classList.remove('off');
  refs.filmOverlay.classList.remove('off');
}
