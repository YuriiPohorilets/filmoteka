import FetchApiMovies from './js/api/fetchApiMovies';
import renderMovieListMarkup from './js/templates/movieList';

const fetchApiMovies = new FetchApiMovies();
const data = fetchApiMovies.fetchTrending();

async function renderMovieList(data) {
  const response = await data;
  const movies = await response.results;

  renderMovieListMarkup(movies);
}

renderMovieList(data);
