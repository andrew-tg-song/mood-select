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
      : res.data[0].detail_datas;
  });

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
