import axios from 'axios';

interface Props {
  name: string;
}

export async function search({ name }: Props) {
  return axios('../public/data/product.json').then((res) =>
    res.data[0].name === 'MAINSLIDER' ? 'main_slider' : name === 'BEST' ? 'best_products' : 'event_banner'
  );
}
