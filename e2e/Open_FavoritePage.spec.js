Feature('Open Favorite Page');

Scenario('Showing List of Liked restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.content');
  I.seeElement('.content');
});
