import FavoriteButtonpresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRumahMakanDB from '../../src/scripts/data/favorite-rumah-makan-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonpresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRumahMakanDB,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
