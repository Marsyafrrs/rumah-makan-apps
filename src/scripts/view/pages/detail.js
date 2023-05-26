import UrlParser from '../../routes/url-parser';
import RumahMakanSource from '../../data/rumah-makan-source';
import * as templateCreator from '../template/template-creator';
import FavoriteButtonpresenter from '../../utils/like-button-presenter';
import FavoriteRumahMakanDB from '../../data/favorite-rumah-makan-idb';

import '../../component/detail';

const Detail = {
  async render() {
    return `
    <item-detail></item-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RumahMakanSource.detailrumahmakan(url.id);
    const restoContainer = document.querySelector('#rumahmakan-detail');
    const likeButtonContainer = document.querySelector('#favoriteButtonContainer');
    const reviewcontainer = document.querySelector('#Review-detail');

    restoContainer.innerHTML = templateCreator.createRumahMakanDetailTemplate(detail);
    likeButtonContainer.innerHTML = templateCreator.createFavoriteButtonTemplate();

    reviewcontainer.innerHTML += `
    <h2 class="judul-review">Reviews Rumah Makan</h2>
    <div id="resto-review"></div>
  `;
    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += templateCreator.createRumahMakanReviewTemplate(review);
    });

    FavoriteButtonpresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRumahMakanDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
