import FavoriteRumahMakanDB from '../../data/favorite-rumah-makan-idb';
import { createRumahMakanItemTemplate } from '../template/template-creator';

const favorite = {
  async render() {
    return `
    <div class="content" id="content-web" tabindex="0">
    <h1 class="favorite-heading">Rumah Makan Favorite</h1>
    <div id="resto-favorite" class="list">

    </div>
  </div>
      `;
  },

  async afterRender() {
    const itemresto = await FavoriteRumahMakanDB.getAllRestaurants();
    const restoContainer = document.querySelector('#resto-favorite');

    if (itemresto.length === 0) {
      restoContainer.innerHTML = `
       <h1 class="favorite-notfound"> Favorite Not Found </h1>
      `;
    }
    const totalResto = itemresto.length;
    itemresto.forEach((restaurant, index) => {
      restoContainer.innerHTML += createRumahMakanItemTemplate(restaurant, index, totalResto);
    });
  },
};

export default favorite;
