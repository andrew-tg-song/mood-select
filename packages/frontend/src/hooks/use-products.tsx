import { useEffect, useState } from 'react';
import axios from 'axios';

interface SliderObject {
  id: string;
  image: string;
  title: string;
}

interface CategoryBannerObject {
  id: string;
  image: string;
  title: string;
  desc: string;
}

interface EventBannerObject {
  id: string;
  image: string;
}

interface NewProductsObject {
  id: string;
  title: string;
  desc: string;
  color: string[];
  image: string;
  price: number;
  salePrice: number;
  banner: string[];
}

interface IResponse {
  main_slider: SliderObject[];
  category_banner: CategoryBannerObject[];
  event_banner: EventBannerObject;
  event_banner_2: EventBannerObject;
  best_products: CategoryBannerObject[];
  new_products: NewProductsObject[];
  today_delivery_products: NewProductsObject[];
  detail_datas: [];
}

const useProducts = () => {
  const [products, setProducts] = useState<IResponse[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError('');

      await axios('../public/data/product.json') //
        .then((res) => {
          console.log('데이터를 네트워크에서 받아옴 => 실제로는 네트워크는 아니고..');
          setProducts(res.data);
        }) //
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setError('에러가 발생했습니다!');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [isLoading, error, products] as const;
};

export default useProducts;
