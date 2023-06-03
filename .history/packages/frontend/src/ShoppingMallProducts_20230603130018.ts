import axios from 'axios';

export async function search(name: string) {
  return axios('../public/data/product.json').then((res) =>
    res.data[0].name === 'MAINSLIDER' ? 'main_slider' : name === 'BEST' ? 'best_products' : 'event_banner'
  );
}
