import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';

interface PrevArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  slidesToShow?: number;
  type?: string;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

export default function PrevArrow({ onClick, slidesToShow, type }: PrevArrowProps) {
  return (
    <>
      {type === 'detail' ? (
        <div
          onClick={onClick}
          className="text-[1.875rem] text-[white] absolute top-[40%] left-[10px] z-[9999] cursor-pointer"
        >
          <BsChevronLeft className="drop-shadow-[-4px_6px_1px_rgba(0,0,0,0.4)]" />
        </div>
      ) : (
        <div
          className={`${slidesToShow === 1 || slidesToShow === 3 ? 'prev-arrow-main-slider' : 'prev-arrow'}`}
          onClick={onClick}
        >
          <BsChevronLeft className="drop-shadow-[-4px_6px_1px_rgba(0,0,0,0.4)]" />
        </div>
      )}
    </>
  );
}
