import refs from '../refs/refs';
import noPosterImage from '../../images/no-poster.jpeg';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const noPosterImg = noPosterImage;

export default function renderMovieListMarkup(movies) {
  const moviesList = movies
    .map(movie => {
      if (movie.poster_path === null) {
        imgBaseUrl = '';
        movie.poster_path = noPosterImg;
      } else {
        imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
      }
      return moviesListTemplate(movie);
    })
    .join('');

  refs.moviesList.insertAdjacentHTML('beforeend', moviesList);
}

function moviesListTemplate({ poster_path, title, release_date }) {
  return `
        <li class="movie__item">
          <a hres="#" class="movie__link">
            <img class="movie__img"
             width="500"
             loading="lazy"
             src="${imgBaseUrl}${poster_path}" 
            />
            
            <div class="movie__descr">
              <p class="movie__title">${title}</p>
              <p class="movie__genre">${title}</p>
              <p class="movie__year">${release_date}</p>
            </div>
          </a>
        </li>
  `;
}
