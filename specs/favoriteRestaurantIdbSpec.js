import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRumahMakanDB from '../src/scripts/data/favorite-rumah-makan-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRumahMakanDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRumahMakanDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRumahMakanDB);
});
