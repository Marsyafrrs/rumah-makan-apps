import FavoriteRumahMakanDB from '../src/scripts/data/favorite-rumah-makan-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRumahMakanDB.getRestaurant(1);
    expect(resto).toEqual({ id: 1 });

    FavoriteRumahMakanDB.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRumahMakanDB.putRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRumahMakanDB.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRumahMakanDB.deleteRestaurant(1);
  });

  it('should not add a restaurant whet it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRumahMakanDB.getAllRestaurants()).toEqual([]);
  });
});
