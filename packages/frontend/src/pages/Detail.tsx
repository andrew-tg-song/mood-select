import { useState, useContext, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import { useQuery } from '@tanstack/react-query';
import { search } from '../ShoppingMallProducts';
import { ProductType } from '../components/product/Product';
import DetailCardSlider from '../components/slider/DetailCardSlider';

import { BsHeart } from 'react-icons/bs';
import { CiShare2 } from 'react-icons/ci';

export default function Detail() {
  const { darkMode } = useContext(DarkModeContext);

  const { detailId } = useParams();

  const name = 'PRODUCTS';

  const { data: products } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  const addComma = (number: number | undefined) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? '0';
  };

  const [colorOption, setColorOption] = useState('옵션을 선택해주세요.');
  const [sizeOption, setSizeOption] = useState('색상을 먼저 선택해주세요.');

  const handleClickColorOption = (e: MouseEvent, name: string) => {
    e.preventDefault();

    console.log(name);
    setColorOption(name);
  };

  const handleClickSizeOption = (e: MouseEvent, name: string) => {
    e.preventDefault();

    // console.log(name);
    setSizeOption(name);
  };

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} pb-[140px]`}>
      <div className="w-[87.5rem] py-[50px] mx-auto">
        {products?.map((product: ProductType) => {
          if (product.id === detailId) {
            return (
              <div key={product.id} className="w-[100%]">
                <div className="w-[100%] flex ">
                  <DetailCardSlider
                    img1={product.image}
                    img2={product.image2}
                    img3={product.image3}
                    img4={product.image4}
                    img5={product.image5}
                  />
                  <div className="w-[50%] pt-[15px] pl-[6.875rem] box-border">
                    <div className="w-[100%] pb-[35px] border-solid border-[#C6C6C6] border-b-[1px]">
                      <div className="w-[100%] mb-[10px] flex justify-between">
                        <div className="flex">
                          {product.banner?.map((b) => {
                            return (
                              <div
                                className={`${
                                  b === 'BEST'
                                    ? 'border-[#8E4F4F] text-[#8E4F4F]'
                                    : b === 'NEW'
                                    ? 'border-[#00CBCB] text-[#00CBCB]'
                                    : 'border-[#ff53ba] text-[#ff53ba]'
                                } w-[4.625rem] h-[20px] mr-[0.375rem] border-solid border-[1px] flex justify-center items-center text-[0.75rem]`}
                              >
                                {b}
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex items-center">
                          <button className="mr-[1.1rem] text-[1.2rem]">
                            <BsHeart />
                          </button>
                          <button className="text-[1.4rem]">
                            <CiShare2 />
                          </button>
                        </div>
                      </div>

                      <h1 className="text-[1.375rem] font-normal">{product.title}</h1>

                      <div className="mt-[20px] flex items-end">
                        <h1 className=" text-[1.375rem] font-medium text-[#FF5B5B]">{`${addComma(
                          product.salePrice
                        )}원`}</h1>
                        <p className="ml-[1.5625rem] text-[#8B8B8B] text-[1rem] leading-[1rem] line-through decoration-[#8B8B8B]">{`${addComma(
                          product.price
                        )}원`}</p>
                      </div>
                    </div>

                    <div className="py-[35px] border-solid border-[#C6C6C6] border-b-[1px]">
                      <div className="w-[100%] mb-[10px] flex items-center text-[0.875rem]">
                        <p className="w-[20%] text-[#999999]">소비자가</p>
                        <p className="w-[80%] text-[#333]">{`${addComma(product.price)}원`}</p>
                      </div>

                      <div className="w-[100%] mb-[10px] flex items-center text-[0.875rem]">
                        <p className="w-[20%] text-[#999999]">판매가</p>
                        <p className="w-[80%] text-[#333]">{`${addComma(product.salePrice)}원`}</p>
                      </div>

                      <div className="w-[100%] flex items-center text-[0.875rem]">
                        <p className="w-[20%] text-[#999999]">상품간략설명</p>
                        <p className="w-[80%] text-[#333]">{product.desc}</p>
                      </div>
                    </div>

                    <div className="w-[100%] py-[35px] flex">
                      <p className="w-[10%] text-[0.875rem] text-[#999999]">옵션</p>

                      <div className="w-[90%]">
                        <p
                          className={`${
                            colorOption === '옵션을 선택해주세요.' ? 'text-[#d1d1d1]' : 'text-[#333333]'
                          } text-[0.75rem]`}
                        >
                          {colorOption}
                        </p>

                        <div className="w-[100%] flex mt-[12px]">
                          {product.color?.map((c) => {
                            return (
                              <button
                                onClick={(e) => handleClickColorOption(e, c.name)}
                                className="w-[4.375rem] h-[70px] mr-[0.625rem] border-solid border-[1px] border-[#d3d3d3] rounded-[6px] focus:border-[#000000] focus:border-[2px]"
                              >
                                <img className="w-[100%] h-[100%] object-cover" src={c.image} />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="w-[100%] pb-[35px] flex border-solid border-b-[1px] border-[#d1d1d1]">
                      <p className="w-[10%] text-[0.875rem] text-[#999999]">사이즈</p>

                      <div className="w-[90%]">
                        <p
                          className={`${
                            sizeOption === '색상을 먼저 선택해주세요.' ? 'text-[#d1d1d1]' : 'text-[#333333]'
                          } text-[0.75rem]`}
                        >
                          {sizeOption}
                        </p>

                        <div className="w-[100%] flex mt-[12px]">
                          {product?.option?.size?.map((c) => {
                            return (
                              <button
                                onClick={(e) => handleClickSizeOption(e, c)}
                                className="w-[4.375rem] h-[70px] mr-[0.625rem] border-solid border-[1px] border-[#d3d3d3] rounded-[6px] focus:border-[#000000] focus:border-[2px]"
                              >
                                {c}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
