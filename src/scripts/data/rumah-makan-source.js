import API_ENDPOINT from '../global/api-endpoint';

class RumahMakanSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailrumahmakan(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default RumahMakanSource;
