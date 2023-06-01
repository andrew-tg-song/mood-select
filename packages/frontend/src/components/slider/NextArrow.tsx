import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  slidesToShow?: number;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

export default function NextArrow({ onClick, slidesToShow }: NextArrowProps) {
  return (
    <div
      className={`${slidesToShow === 1 || slidesToShow === 3 ? 'next-arrow-main-slider' : 'next-arrow'}`}
      onClick={onClick}
    >
      <BsChevronRight className="drop-shadow-[-4px_6px_1px_rgba(0,0,0,0.4)]" />
    </div>
  );
}
