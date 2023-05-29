import React from 'react';
import logo from '../assets/logo.png';
import { CiMenuBurger, CiSearch, CiLock, CiUser, CiHeart, CiDark, CiLight } from 'react-icons/ci';

export default function NavBar() {
  return (
    <div className="w-[100%] h-[220px]">
      <div className="w-[100%] h-[40px] bg-black flex justify-center items-center">
        <p className="text-white font-light text-[0.875rem]">7일 연속 출석 시 적립금 1,000원 ⏰</p>
      </div>

      <div className="w-[100%] h-[120px] border-[#dedede] border-solid border-b-[0.6px]">
        <div className="w-[93.75rem] h-[100%] mx-auto flex flex-row items-center justify-between relative">
          <div className="w-[216px] h-[100%] flex items-center absolute left-[50%] ml-[-108px]">
            <img src={logo} className="w-[100%] h-[80px] object-cover" />
          </div>

          <ul className="text-[#999999] text-[0.75rem] flex absolute right-0">
            <li className="mr-[1.43rem]">로그인</li>
            <li className="mr-[1.43rem]">회원가입</li>
            <li className="mr-[1.43rem]">비회원 주문 조회</li>
            <li className="mr-[1.43rem]">고객센터</li>
            <li>공지</li>
          </ul>
        </div>
      </div>

      <div className="w-[100%] h-[60px] border-[#dedede] border-solid border-b-[0.6px]">
        <div className="w-[93.75rem] h-[100%] mx-auto flex flex-row items-center justify-between relative">
          <ul className="w-[68.75rem] h-[100%] flex justify-between items-center text-[0.875rem]">
            <li>
              <CiMenuBurger />
            </li>
            <li>NEW</li>
            <li>BEST</li>
            <li>오늘 출발 제품🚛</li>
            <li>블라우스&셔츠</li>
            <li>티셔츠</li>
            <li>니트</li>
            <li>아우터</li>
            <li>스커트</li>
            <li>팬츠</li>
            <li>언더웨어</li>
            <li>비치웨어</li>
            <li>악세잡화</li>
            <li>SALE</li>
            <li>EVENT🥳</li>
            <li>REVIEW</li>
          </ul>

          <ul className="w-[11.625rem] h-[100%] flex justify-between items-center text-[1.2rem]">
            <li>
              <CiSearch />
            </li>
            <li>
              <CiLock />
            </li>
            <li>
              <CiUser />
            </li>
            <li>
              <CiHeart />
            </li>
            <li>
              <CiDark />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
