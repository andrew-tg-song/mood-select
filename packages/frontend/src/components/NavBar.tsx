import { useState } from 'react';

import darkLogo from '../assets/logo.png';
import lightLogo from '../assets/logo2.png';

import { CiMenuBurger, CiSearch, CiUser, CiHeart, CiDark, CiLight } from 'react-icons/ci';
import { GiShoppingCart } from 'react-icons/gi';
import TopEventBanner from './header/TopEventBanner';
import { categoryAppearState, darkModeState } from '../atoms/app-atoms';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export default function NavBar() {
  const navigate = useNavigate();

  const [cartCount] = useState(0);
  const [wishCount] = useState(0);

  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const toggleDarkMode = () => {
    if (darkMode === 'dark') {
      setDarkMode('light');
    } else {
      setDarkMode('dark');
    }
  };

  const [, setCategoryAppear] = useRecoilState(categoryAppearState);

  const title = ['아우터', '원피스', '니트', '티셔츠', '블라우스&셔츠', '스커트', '팬츠', '언더웨어', '악세잡화'];

  return (
    <div className="w-[100%] lg:h-[220px] font-sans">
      <TopEventBanner />

      <div
        className={`${
          darkMode === 'light' ? 'bg-white border-[#dedede]' : 'bg-[#0f0f0f] border-[#3b3b3b]'
        } w-full lg:h-[120px] sm:h-[160px] h-[160px] border-solid border-b-[0.6px]`}
      >
        <div className="w-11/12 h-[100%] mx-auto flex lg:flex-row sm:flex-col flex-col items-center lg:justify-between sm:justify-center justify-center relative">
          <div className="w-[216px] h-auto flex items-center lg:absolute left-[50%] lg:ml-[-108px]">
            <img
              onClick={() => {
                navigate('/');
              }}
              src={`${darkMode === 'light' ? darkLogo : lightLogo}`}
              className="w-[100%] object-cover cursor-pointer"
            />
          </div>

          <ul className="text-[#999999] text-[0.75rem] flex lg:absolute right-0 cursor-pointer sm:mt-[10px] mt-[10px]">
            <li className="mr-[1.43rem]">로그인</li>
            <li className="mr-[1.43rem]">회원가입</li>
            <li className="mr-[1.43rem]">비회원 주문 조회</li>
            <li className="mr-[1.43rem]">고객센터</li>
            <li>공지</li>
          </ul>
        </div>
      </div>

      <div
        className={`${
          darkMode === 'light' ? 'bg-white border-[#dedede]' : 'bg-[#0f0f0f] border-[#3b3b3b]'
        } w-full sm:h-[60px] h-[60px] border-solid border-b-[0.6px]`}
      >
        <div className="xl:w-11/12 sm:w-[96%] w-[96%] h-[100%] mx-auto flex flex-row items-center justify-between relative">
          <ul
            className={`${
              darkMode === 'light' ? 'text-black' : 'text-white'
            } xl:w-9/12 lg:w-[86%] w-auto h-[100%] flex justify-between items-center xl:text-[0.875rem] lg:text-[0.75rem] sm:text-[0.875rem] text-[0.875rem] cursor-pointer`}
          >
            <li onClick={() => setCategoryAppear(true)} className=" cursor-pointer">
              <CiMenuBurger className={`${darkMode === 'light' ? 'text-black' : 'text-white'}`} />
            </li>
            <li
              onClick={() => {
                navigate('/new');
              }}
              className="text-[#FF5E5E] lg:block sm:hidden hidden"
            >
              NEW
            </li>
            <li
              onClick={() => {
                navigate('/best');
              }}
              className="text-[#FF5E5E] lg:block sm:hidden hidden"
            >
              BEST
            </li>
            <li className="text-[#FF5E5E] lg:block sm:hidden hidden">오늘 출발 제품🚛</li>
            <li className="xl:block sm:hidden hidden">
              <input
                type="button"
                value={title[0]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[0])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[1]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[1])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[2]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[2])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[3]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[3])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[4]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[4])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[5]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[5])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[6]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[6])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[7]}
                onClick={() => {
                  navigate(`/list/${encodeURIComponent(title[7])}`);
                }}
              />
            </li>
            <li className="lg:block sm:hidden hidden">
              <input
                type="button"
                value={title[8]}
                onClick={() => {
                  navigate(`/list/${title[8]}`);
                }}
              />
            </li>
            <li className="text-[#FF5EDB] lg:block sm:hidden hidden">SALE</li>
            <li className="text-[#FF5E5E] lg:block sm:hidden hidden">EVENT🥳</li>
            <li className="text-[#FF5E5E] lg:block sm:hidden hidden">REVIEW</li>
          </ul>

          <ul
            className={`${
              darkMode === 'light' ? 'text-black' : 'text-white'
            } xl:w-[12%] lg:w-[11%] sm:w-auto w-auto h-[100%] flex justify-between items-center xl:text-[1.2rem] lg:text-[1.1rem] sm:text-[1.2rem] text-[1.2rem] cursor-pointer`}
          >
            <li className="lg:mx-0 sm:mx-2 mx-2">
              <CiSearch />
            </li>
            <li className="relative lg:mx-0 sm:mx-2 mx-2">
              <div
                className={`${
                  darkMode === 'light' ? 'bg-black ' : 'bg-[#FF5E5E]'
                } absolute top-[-4px] right-[-6px] w-[0.9rem] h-[0.9rem] rounded-full text-[0.7rem] text-white font-light flex justify-center items-center`}
              >
                {cartCount}
              </div>
              <GiShoppingCart />
            </li>
            <li className="lg:mx-0 sm:mx-2 mx-2">
              <CiUser />
            </li>
            <li className="relative lg:mx-0 sm:mx-2 mx-2">
              <div
                className={`${
                  darkMode === 'light' ? 'bg-black ' : 'bg-[#FF5E5E]'
                } absolute top-[-4px] right-[-6px] w-[0.9rem] h-[0.9rem]  rounded-full  text-[0.7rem] text-white font-light flex justify-center items-center`}
              >
                {wishCount}
              </div>
              <CiHeart />
            </li>
            <li className="lg:mx-0 sm:mx-2 mx-2" onClick={toggleDarkMode}>
              {darkMode === 'dark' ? <CiLight /> : <CiDark />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
