/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import DicodingRestoSource from '../../data/dicodingResto-source';
import {createRestaurantDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/likeButton-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurants" class="restaurants">
      
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestoSource.detailresto(url.id);
    const restaurantContainer = document.querySelector('#restaurants');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        title: restaurant.title,
        overview: restaurant.overview,
        backdrop_path: restaurant.backdrop_path,
        vote_average: restaurant.vote_average,
      },
    });
  },
};

export default Detail;
