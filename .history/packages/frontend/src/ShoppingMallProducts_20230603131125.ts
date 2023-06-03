import axios from 'axios';

export async function search(name: string) {
  if (name === 'MAINSLIDER') {
    return axios('../public/data/product.json').then((res) => res.data[0].main_slider);
  } else if (name === 'CATEGORYBANNER') {
    return axios('../public/data/product.json').then((res) => res.data[0].category_banner);
  } else if (name === 'EVENTBANNER') {
    return axios('../public/data/product.json').then((res) => res.data[0].event_banner);
  }
}
