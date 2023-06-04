import axios from 'axios';

export async function search(name: string) {
  return axios('../public/data/product.json').then((res) => {
    return name === 'MAINSLIDER'
      ? res.data[0].main_slider
      : name === 'CATEGORY'
      ? res.data[0].category_banner
      : name === 'EVENT'
      ? res.data[0].event_banner
      : name === 'EVENT2'
      ? res.data[0].event_banner_2
      : name === 'BEST'
      ? res.data[0].best_products
      : name === 'NEW'
      ? res.data[0].new_products
      : name === 'TODAYDELIVERY'
      ? res.data[0].today_delivery_products
      : name === 'PRODUCTS'
      ? res.data[0].products
      : res.data[0].category;
  });
}
