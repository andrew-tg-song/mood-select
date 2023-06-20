import { useState } from 'react';
import Button from '../Button';

interface detailProps {
  detailImg?: string[];
  detailBannerImg?: string[];
}

export default function DetailView({ detailImg, detailBannerImg }: detailProps) {
  const [fold, setFold] = useState<boolean>(false);

  const handleClickFold = (e: React.MouseEvent) => {
    e.preventDefault();

    setFold((prev) => !prev);
  };
  console.log(fold);

  return (
    <>
      <div
        className={`${
          fold ? 'height-[auto]' : 'h-[2650px] '
        } w-[75rem] overflow-hidden mx-auto relative flex flex-col items-center`}
      >
        <div className="w-[100%] mb-[40px]">
          {detailBannerImg?.map((bannerImg) => {
            return (
              <>
                <img className="w-[100%] object-cover mb-[20px]" src={bannerImg} />
              </>
            );
          })}
        </div>
        {detailImg?.map((img) => {
          return (
            <>
              <img className="w-[100%] object-cover" src={img} />
            </>
          );
        })}

        <div className="w-[100%] h-[180px] bg-gradient-to-b from-transparent from-[6%] to-white to-[62%] absolute bottom-0" />
        <Button onClick={handleClickFold} value={`${fold ? '상세정보 접기' : '상세정보 펼쳐보기'}`} />
      </div>
    </>
  );
}
