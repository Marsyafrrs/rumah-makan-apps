import RumahMakanSource from '../../data/rumah-makan-source';
import { createRumahMakanItemTemplate } from '../template/template-creator';
import '../../component/ulasan';

const home = {
  async render() {
    return `
    <div class="heros">
    <h1  tabindex="0">Welcome to Rumah Makan</h1>
     </div>

    <section class="content" id="content-web" tabindex="0">
            <h1>Temukan informasi Rumah Makan Kekinian di setiap kota TERBAIK!</h1>
            <div class="list" id="list" tabindex="0"></div>
    </section>

    <ulasan-web></ulasan-web>
      `;
  },

  async afterRender() {
    const rumahmakan = await RumahMakanSource.home();
    const rumahmakanitem = document.querySelector('#list');

    rumahmakan.forEach((restaurant) => {
      rumahmakanitem.innerHTML += createRumahMakanItemTemplate(restaurant);
    });
  },
};

export default home;
