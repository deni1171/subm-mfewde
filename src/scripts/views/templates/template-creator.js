/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `
  <h2 class="restaurants__name">${restaurants.name}</h2>
  <img class="restaurants-item__header__poster" alt="${restaurants.name}" src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
  <div class="restaurants__info">
    <h3>Information</h3>
      <h4>Kota</h4>
      <p>${restaurants.city}</p>
      <h4>alamat</h4>
      <p>${restaurants.address}</p>
      <h4>Kategori Menu</h4>
      <p>${restaurants.categories.map((category)=>category.name)}</p>
      <h4>Menu Makanan</h4>
      <span id="food">
      <p>${restaurants.menus.foods.map((food)=>food.name)}</p>
      </span>
      <h4>Menu Minuman</h4>
      <span id="drinks">
      <p>${restaurants.menus.drinks.map((drink)=>drink.name)}</p>
      </span>
      <h4>Rating</h4>
      <p>${restaurants.rating}</p>
      <h4>Deskripsi</h4>
      <p>${restaurants.description}</p>
    </div>
  <div class="restaurants__review">
  ${restaurants.customerReviews.map((review)=>`
  <h5>review</h5>
    <div class="restaurants__review_list">
        <h6 tabindex="0">${review.name}</h6>
        <p tabindex="0" class="date-review">${review.date}</p>
        <p tabindex="0">${review.review}</p>
    </div>
`).join('')}
    </div>`;

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
        <img class="restaurants-item__header__poster" alt="${restaurants.name}" src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
        <div class="restaurants-item__header__detail">
          <p class="restaurants-item__city">${restaurants.city}</p>    
          <p class="restaurants-item__header__rating">⭐️<span>${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="restaurants-item__content">
        <h3 class="restaurants-item__name"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
        <p class="restaurants-item__description">${restaurants.description}</p>
    </div>
    <button class="restaurants-item__button">Lihat Detail</button>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate};
