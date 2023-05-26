const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurants', async ({ I }) => {
  I.seeElement('#resto-favorite');
  I.see('Favorite Not Found', '#resto-favorite');

  I.amOnPage('/');
  I.waitForElement('.tombol-detail a', 10);
  I.seeElement('.tombol-detail a');

  const firstRestaurant = locate('.tombol-detail a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.tombol-detail a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.tombol-detail a');
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.see('Favorite Not Found', '#resto-favorite');
});
