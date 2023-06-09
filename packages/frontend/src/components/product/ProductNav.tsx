import { useQuery } from '@tanstack/react-query';
import { search } from '../../ShoppingMallProducts';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductNav() {
  const navigate = useNavigate();
  const { listName, kind } = useParams();
  console.log(listName, kind);

  const name = 'NAV';

  const { data: products } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div>
      <ul className="flex items-center justify-center mx-auto ">
        {products?.map(
          (product: { type: string | undefined; kind: (string | number | readonly string[] | undefined)[] }) => {
            if (product.type === listName) {
              return (
                <>
                  {product?.kind?.map((k, i) => {
                    return (
                      <li key={i} className="mr-[1rem]">
                        <input
                          type="button"
                          value={k}
                          onClick={() => {
                            navigate(`/list/${listName}/${k}`);
                          }}
                        />
                      </li>
                    );
                  })}
                </>
              );
            }
          }
        )}
      </ul>
    </div>
  );
}
