import React from 'react';
import ReactLogo from '../assets/logo.png';

export default function NavBar() {
  return (
    <div className="w-[100%] h-[180px] bg-slate-100">
      <div className="w-[100%] h-[120px]">
        <div className="w-[93.75rem] h-[100%] mx-auto flex flex-row items-center justify-between relative">
          <div className="w-[216px] h-[100%] flex items-center absolute left-[50%] ml-[-108px]">
            <img src={ReactLogo} className="w-[100%] h-[80px] object-cover" />
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
    </div>
  );
}
