import { useState, useContext, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { darkModeState } from '../atoms/app-atoms';
import { useQuery } from '@tanstack/react-query';
import { search } from '../apis/ShoppingMallProducts';
import { ProductType } from '../components/product/Product';
import DetailCardSlider from '../components/slider/DetailCardSlider';

import { BsHeart } from 'react-icons/bs';
import { CiShare2 } from 'react-icons/ci';
import OptionSelect from '../components/detail/OptionSelect';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { optionListState } from '../atoms/product-atoms';
import DetailView from '../components/detail/DetailView';
import MatchUp from '../components/detail/MatchUp';
import Review from '../components/detail/Review';
import Refund from '../components/detail/Refund';
import QaA from '../components/detail/QaA';
import Similar from '../components/detail/Similar';

export default function Detail() {
  const [darkMode] = useRecoilState(darkModeState);

  const { detailId } = useParams();

  const name = 'PRODUCTS';

  const { data: products } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  const addComma = (number: number | undefined) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? '0';
  };

  const [colorOption, setColorOption] = useState('옵션을 선택해주세요.');
  const [sizeOption, setSizeOption] = useState('색상을 먼저 선택해주세요.');
  const [option] = useRecoilState(optionListState);
  const setOption = useSetRecoilState<{ color: string; size: string }[]>(optionListState);
  const [total, setTotal] = useState(0);
  const [selectedTab, setSelectedTab] = useState('상품정보');

  // const [countsMap] = useRecoilState(optionSelectsCountState);
  // const setCountsMap = useSetRecoilState(optionSelectsCountState);

  const handleClickColorOption = (e: MouseEvent, name: string) => {
    e.preventDefault();

    console.log(name);
    setColorOption(name);
  };

  const handleClickSizeOption = (e: MouseEvent, name: string) => {
    e.preventDefault();

    // console.log(name);
    setSizeOption(name);

    const isOptionExist = (color: string, size: string) => {
      return option.some((o: { color: string; size: string }) => o.color === color && o.size === size);
    };

    if (isOptionExist(colorOption, name)) {
      setTotal(total + 1);
      return;
    }

    setSizeOption(name);
    setTotal(total + 1);
    setOption((prev) => [...prev, { color: colorOption, size: name }]);
  };
  console.log(option);

  const handleCountChange = (change: number) => {
    setTotal(total + change);
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
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

                    <div className="w-[100%] pb-[35px] flex ">
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

                    <div className="pb-[6px] border-solid border-b-[1px] border-[#d1d1d1]">
                      {option.length >= 1 ? (
                        <>
                          {option.map((o, idx) => {
                            return (
                              <OptionSelect
                                key={idx}
                                detail={o}
                                total={total}
                                handleCountChange={handleCountChange}
                                price={product.salePrice}
                                addComma={addComma}
                              />
                            );
                          })}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="flex justify-between items-center my-[36px] pb-[36px] border-solid border-b-[1px] border-[#d1d1d1]">
                      <p className="text-[#373534] text-[0.875rem]">총금액</p>
                      <p className="text-[#FF6F6F] text-[1.5rem]">
                        {product.salePrice && `${addComma(total * product?.salePrice)}원`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] mt-[182px]">
                  <ul className="w-[100%] flex text-center border-solid border-[#D2D2D2] text-[0.875rem] text-[#282828]">
                    <li
                      onClick={() => handleTabClick('상품정보')}
                      className={`${
                        selectedTab === '상품정보' ? 'bg-[#333333] text-[#ffffff]' : ''
                      } w-[20%] border-t-[1px] border-x-[1px] py-[15px] rounded-t-lg`}
                    >
                      상품정보
                    </li>
                    <li
                      onClick={() => handleTabClick('관련상품')}
                      className={`${
                        selectedTab === '관련상품' ? 'bg-[#333333] text-[#ffffff]' : ''
                      } w-[20%] border-t-[1px] border-x-[1px] py-[15px] rounded-t-lg`}
                    >
                      관련상품
                    </li>
                    <li
                      onClick={() => handleTabClick('구매후기')}
                      className={`${
                        selectedTab === '구매후기' ? 'bg-[#333333] text-[#ffffff]' : ''
                      } w-[20%] border-t-[1px] border-x-[1px] py-[15px] rounded-t-lg`}
                    >
                      구매후기
                    </li>
                    <li
                      onClick={() => handleTabClick('교환 및 반품')}
                      className={`${
                        selectedTab === '교환 및 반품' ? 'bg-[#333333] text-[#ffffff]' : ''
                      } w-[20%] border-t-[1px] border-x-[1px] py-[15px] rounded-t-lg`}
                    >
                      교환 및 반품
                    </li>
                    <li
                      onClick={() => handleTabClick('상품문의')}
                      className={`${
                        selectedTab === '상품문의' ? 'bg-[#333333] text-[#ffffff]' : ''
                      } w-[20%] border-t-[1px] border-x-[1px] py-[15px] rounded-t-lg`}
                    >
                      상품문의
                    </li>
                  </ul>
                  <div className="w-[100%] pt-[40px] text-center">
                    {selectedTab === '상품정보' && (
                      <div>
                        <DetailView
                          detailImg={product?.detail?.detailImage}
                          detailBannerImg={product?.detail?.detailEventBanner}
                        />
                        <div className="w-[100%] h-[10px] bg-[#f6f6f6]" />
                        <Similar product={product} />
                      </div>
                    )}
                    {selectedTab === '관련상품' && <MatchUp />}
                    {selectedTab === '구매후기' && <Review />}
                    {selectedTab === '교환 및 반품' && <Refund />}
                    {selectedTab === '상품문의' && <QaA />}
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
