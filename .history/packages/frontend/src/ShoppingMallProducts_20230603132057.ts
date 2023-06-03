import axios from 'axios';

export async function search(name: string) {
  if (name === 'ALL') {
    return axios('../public/data/product.json').then((res) => res.data[0]);
  } else if (name === 'MAINSLIDER') {
    return axios('../public/data/product.json').then((res) => res.data[0].main_slider);
  } else if (name === 'CATEGORY') {
    return axios('../public/data/product.json').then((res) => res.data[0].category_banner);
  } else if (name === 'EVENT') {
    return axios('../public/data/product.json').then((res) => res.data[0].event_banner);
  } else if (name === 'EVENT2') {
    return axios('../public/data/product.json').then((res) => res.data[0].category_banner2);
  } else if (name === 'BEST') {
    return axios('../public/data/product.json').then((res) => res.data[0].best_products);
  } else if (name === 'NEW') {
    return axios('../public/data/product.json').then((res) => res.data[0].new_products);
  } else if (name === 'TODAYDELIVERY') {
    return axios('../public/data/product.json').then((res) => res.data[0].today_delivery_products);
  } else {
    return axios('../public/data/product.json').then((res) => res.data[0].detail_datas);
  }
}
