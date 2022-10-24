import { FetchApiMovies } from './js/api/fetchApiMovies';
import { renderMovieListMarkup } from './js/templates/movieList';
import { onSubmitForm } from './js/components/inputSearch/searchByName';
import { onFilmClick } from './js/components/modal/modal';
import { Loader } from './js/components/loader/loader';

const loader = new Loader();
const fetchApiMovies = new FetchApiMovies();
const data = fetchApiMovies.fetchTrending();

async function renderMovieList(data) {
  loader.on();
  const response = await data;
  const movies = await response.results;

  renderMovieListMarkup(movies);
  loader.off();
}

renderMovieList(data);
