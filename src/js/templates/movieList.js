import refs from '../refs/refs';

export default function renderMovieListMarkup(movies) {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const movieList = movies
    .map(({ backdrop_path, title }) => {
      return `
  <li class="movie__item">
    <a hres="#" class="movie__link">
      <img class="movie__img" src="${imgBaseUrl}${backdrop_path}" />
      <p class="movie__title">${title}</p>
    </a>
  </li>
  `;
    })
    .join('');

  refs.moviesList.insertAdjacentHTML('beforeend', movieList);
}
