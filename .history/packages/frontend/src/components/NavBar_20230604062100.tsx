import { useState, useContext } from 'react';

import darkLogo from '../assets/logo.png';
import lightLogo from '../assets/logo2.png';

import { CiMenuBurger, CiSearch, CiUser, CiHeart, CiDark, CiLight } from 'react-icons/ci';
import { GiShoppingCart } from 'react-icons/gi';
import TopEventBanner from './header/TopEventBanner';
import { DarkModeContext } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="w-[100%] h-[220px] font-sans">
      <TopEventBanner />

      <div
        className={`${
          darkMode === 'light' ? 'bg-white border-[#dedede]' : 'bg-[#0f0f0f] border-[#3b3b3b]'
        } w-[100%] h-[120px] border-solid border-b-[0.6px]`}
      >
        <div className="w-[93.75rem] xl:w-[68.752rem] h-[100%] mx-auto flex flex-row items-center justify-between relative">
          <div className="w-[216px] h-[100%] flex items-center absolute left-[50%] ml-[-108px]">
            <img src={`${darkMode === 'light' ? darkLogo : lightLogo}`} className="w-[100%] object-cover" />
          </div>

          <ul className="text-[#999999] text-[0.75rem] flex absolute right-0 cursor-pointer">
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
        } w-[100%] h-[60px]  border-solid border-b-[0.6px]`}
      >
        <div className="w-[93.75rem] h-[100%] mx-auto flex flex-row items-center justify-between relative">
          <ul
            className={`${
              darkMode === 'light' ? 'text-black' : 'text-white'
            } w-[68.75rem] h-[100%] flex justify-between items-center text-[0.875rem] cursor-pointer`}
          >
            <li>
              <CiMenuBurger className={`${darkMode === 'light' ? 'text-black' : 'text-white'}`} />
            </li>
            <li
              onClick={() => {
                navigate('/new');
              }}
              className="text-[#FF5E5E]"
            >
              NEW
            </li>
            <li
              onClick={() => {
                navigate('/best');
              }}
              className="text-[#FF5E5E]"
            >
              BEST
            </li>
            <li className="text-[#FF5E5E]">오늘 출발 제품🚛</li>
            <li>블라우스&셔츠</li>
            <li>티셔츠</li>
            <li>니트</li>
            <li>아우터</li>
            <li>스커트</li>
            <li>팬츠</li>
            <li>언더웨어</li>
            <li>비치웨어</li>
            <li>악세잡화</li>
            <li className="text-[#FF5EDB]">SALE</li>
            <li className="text-[#FF5E5E]">EVENT🥳</li>
            <li className="text-[#FF5E5E]">REVIEW</li>
          </ul>

          <ul
            className={`${
              darkMode === 'light' ? 'text-black' : 'text-white'
            } w-[11.625rem] h-[100%] flex justify-between items-center text-[1.2rem] cursor-pointer`}
          >
            <li>
              <CiSearch />
            </li>
            <li className="relative">
              <div
                className={`${
                  darkMode === 'light' ? 'bg-black ' : 'bg-[#FF5E5E]'
                } absolute top-[-4px] right-[-6px] w-[0.9rem] h-[0.9rem]  rounded-full  text-[0.7rem] text-white font-light flex justify-center items-center`}
              >
                {cartCount}
              </div>
              <GiShoppingCart />
            </li>
            <li>
              <CiUser />
            </li>
            <li className="relative">
              <div
                className={`${
                  darkMode === 'light' ? 'bg-black ' : 'bg-[#FF5E5E]'
                } absolute top-[-4px] right-[-6px] w-[0.9rem] h-[0.9rem]  rounded-full  text-[0.7rem] text-white font-light flex justify-center items-center`}
              >
                {wishCount}
              </div>
              <CiHeart />
            </li>
            <li onClick={toggleDarkMode}>{darkMode === 'dark' ? <CiLight /> : <CiDark />}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
