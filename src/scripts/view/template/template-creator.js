import CONFIG from '../../global/config';

const createRumahMakanItemTemplate = (item) => `
  <div class="card">
            <img class="gambar lazyload" crossorigin="anonymous" data-src="${item.pictureId ? CONFIG.BASE_IMAGE_URL + item.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${item.name}">
           <div class="kota">${item.city}</div>
           <div class="card_content">
               <p class="title">${item.name}</p>
               <p tabindex="0" class="rating"> Rating : <i class="fas fa-star"></i> <b>${item.rating}</b></p>
               <div tabindex="0" class="deskripsi">${item.description.slice(0, 500)}...</div>   
            </div>
            <h4 class="tombol-detail">
                <a href="./#/detail/${item.id}">Detail Rumah Makan</a>
            </h4>
       </div>`;

const createRumahMakanDetailTemplate = (item) => `
  <div class="detail">
  <div class="image" id="image">
  <img class="image-detail lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + item.pictureId}" alt="${item.name}" />
  </div>
  
  <div class="descripsi">
  <h1 class="detail-title" id="item-title"> ${item.name} </h1>
  
  <div class="info">
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${item.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${item.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${item.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${item.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${item.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${item.description}</p>
    </div>
  </div>
  </div>
`;

const createRumahMakanReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p class="komen">${reviews.review}</p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRumahMakanItemTemplate,
  createRumahMakanDetailTemplate,
  createRumahMakanReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
