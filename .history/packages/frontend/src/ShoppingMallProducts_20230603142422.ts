import axios from 'axios';

export async function search(name: string) {
  return axios('../public/data/product.json').then((res) =>
    res.data[0].name === 'MAINSLIDER'
      ? 'main_slider'
      : name === 'CATEGORY'
      ? 'category_banner'
      : name === 'EVENT'
      ? 'event_banner'
      : name === 'EVENT2'
      ? 'event_banner_2'
      : name === 'BEST'
      ? 'best_products'
      : name === 'NEW'
      ? 'new_products'
      : name === 'TODAYDELIVERY'
      ? 'today_delivery_products'
      : 'detail_datas'
  );

  // if(name === 'MAINSLIDER') {
  //   return axios('../public/data/product.json').then((res) => res.data[0].main_slider);
  // } else if (name === 'CATEGORY') {
  //   return axios('../public/data/product.json').then((res) => res.data[0].category_banner);
  // } else if (name === 'EVENT') {
  //   return axios('../public/data/product.json').then((res) => res.data[0].event_banner);
  // } else if (name === 'EVENT2') {
  //   return axios('../public/data/product.json').then((res) => res.data[0].category_banner_2);
  // } else if (name === 'BEST') {
  //   return axios('../public/data/product.json').then((res) => res.data[0].best_products);
  // } else if (name === 'NEW') {
  //   return axios('../public/data/product.json').then((res) => res.data[0].new_products);
  // } else if (name === 'TODAYDELIVERY') {
  //   return axios('../public/data/product.json').then((res) => res.data[0].today_delivery_products);
  // } else {
  //   return axios('../public/data/product.json').then((res) => res.data[0].detail_datas);
  // }
}
