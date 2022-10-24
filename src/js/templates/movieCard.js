import { refs } from '../refs/refs';
import noPosterImage from '../../images/no-poster.jpeg';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const noPosterImg = noPosterImage;

export function renderMovieCard(movies) {
  refs.modal.innerHTML = '';

  const movieModal = movies
    .map(movie => {
      if (movie.poster_path === null) {
        imgBaseUrl = '';
        movie.poster_path = noPosterImg;
      } else {
        imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
      }
      return movieCardTemplate(movie);
    })
    .join('');

  refs.modal.insertAdjacentHTML('beforeend', movieModal);
}

function movieCardTemplate({ title }) {
  return `
   <div class="film">
    <div class="film__box">
      <img class="film__img" src="./images/no-poster.jpeg" alt="" width="500" />
    </div>

    <div class="film__wrapper">
      <h2 class="film__name">A FISTFUL OF LEAD</h2>

      <ul class="film__stats">
        <li class="film__stat">
          <span class="stat__name">Vote / Votes</span>
          <span class="stat__value">
            <span class="stat__value stat__value--active">7.3</span>
            /
            <span class="stat__value stat__value--noactive">1260</span>
          </span>
        </li>
        <li class="film__stat">
          <span class="stat__name">Popularity</span>
          <span class="stat__value">100.2</span>
        </li>
        <li class="film__stat">
          <span class="stat__name">Original Title</span>
          <span class="stat__value">A FISTFUL OF LEAD</span>
        </li>
        <li class="film__stat">
          <span class="stat__name">Genre</span>
          <span class="stat__value">Western</span>
        </li>
      </ul>

      <p class="film__about">About</p>
      <p class="film__description">
      </p>

      <div class="btn__wrapper">
        <button class="btn btn--active" id="watched" type="button">Add to watched</button>
        <button class="btn" id="queue" type="button">Add to queue</button>
      </div>
    </div>
  </div>
  `;
}
