import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { useQuery } from '@tanstack/react-query';
import { search } from '../ShoppingMallProducts';
import { BsXLg } from 'react-icons/bs';
import { CategoryToggleContext } from '../context/CategoryToggleContext';
import { ObjectCategory } from './product/Product';

export default function Category() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  const name = 'NAV';

  const { data: products } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  const { categoryAppear, toggleCategory } = useContext(CategoryToggleContext);

  return (
    <div
      className={`${darkMode === 'light' ? 'bg-[white]' : 'bg-[black]'} ${
        categoryAppear ? 'animate-fade-in-down' : 'animate-fade-out-down'
      }
    w-[100%] h-[100vh] z-[999999999] fixed top-0 left-0`}
    >
      <div className="w-[81.25rem] h-[100vh] py-[60px] box-border mx-auto">
        <div className="w-[100%] flex justify-end items-center">
          <button
            onClick={toggleCategory}
            className="hover:animate-fade-out-down w-[2.5rem] h-[40px] flex justify-center items-center text-[1.4rem] text-[#282828]"
          >
            <BsXLg />
          </button>
        </div>
        <div className="w-[100%] h-[100%] flex">
          <ul className="w-[11.25rem] h-[100%] border-r-[1px] border-solid border-[#e5e5e5] text-[0.875rem] text-[#333333] flex flex-col justify-center">
            {products?.map((product: ObjectCategory) => {
              return (
                <li
                  className={`${
                    product.type === 'NEW' ||
                    product.type === 'BEST' ||
                    product.type === '오늘 출발 제품🚛' ||
                    product.type === 'EVENT🥳' ||
                    product.type === 'REVIEW'
                      ? 'text-[#ff5e5e]'
                      : product.type === 'SALE'
                      ? 'text-[#ff5ed8]'
                      : 'text-[#333333] hidden'
                  } w-[11.25rem] py-[5px] font-normal`}
                >
                  {product.type}
                </li>
              );
            })}
          </ul>

          <div className="w-[100%] ml-[6.875rem] flex flex-wrap">
            {products?.map((product: ObjectCategory) => {
              return (
                <ul
                  className={`${
                    product.type === 'NEW' ||
                    product.type === 'BEST' ||
                    product.type === '오늘 출발 제품🚛' ||
                    product.type === 'SALE' ||
                    product.type === 'EVENT🥳' ||
                    product.type === 'REVIEW'
                      ? 'w-[0]'
                      : 'w-[12.5rem] mb-[14px]'
                  }`}
                >
                  <li
                    className={`${
                      product.type === 'NEW' ||
                      product.type === 'BEST' ||
                      product.type === '오늘 출발 제품🚛' ||
                      product.type === 'SALE' ||
                      product.type === 'EVENT🥳' ||
                      product.type === 'REVIEW'
                        ? 'hidden w-0'
                        : 'block'
                    } py-[1rem] text-[0.875rem] text-[#333333]`}
                  >
                    {product.type}
                  </li>
                  {product.kind.map((k: string) => {
                    return (
                      <li
                        className={`${
                          k === 'NEW' ||
                          k === 'BEST' ||
                          k === '오늘 출발 제품🚛' ||
                          k === 'SALE' ||
                          k === 'EVENT🥳' ||
                          k === 'REVIEW'
                            ? 'hidden w-0'
                            : 'block'
                        } w-[100%] py-[3px] flex text-[0.875rem] text-[#999999]`}
                      >
                        {k}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
