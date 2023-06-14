import { useRecoilState } from 'recoil';
import { darkModeState } from '../atoms/app-atoms';
import darkLogo from '../assets/logo.png';
import lightLogo from '../assets/logo2.png';

export default function Footer() {
  const [darkMode] = useRecoilState(darkModeState);

  return (
    <div
      className={`${
        darkMode === 'light'
          ? 'bg-[#1d1d1d] text-[#e4e4e4]'
          : 'bg-[#ebebeb] text-[#6b6b6b] border-t-[0.8px] border-[#ebebeb] border-solid'
      } w-[100%] text-[0.8125rem] font-sans`}
    >
      <div className="w-[93.75rem] h-[100%] py-[4.375rem] box-border mx-auto flex flex-col justify-between relative">
        <div className="w-[216px]">
          <img className="w-[100%] height-[100%] object-cover" src={`${darkMode === 'light' ? lightLogo : darkLogo}`} />
        </div>

        <div className="w-[100%] h-[100%] mt-[1.875rem] flex flex-row">
          <div className="w-[50%] h-[100%]">
            <ul className="flex">
              <li className="pr-[1.2rem] border-r-[0.8px] border-[#9f9f9f]">브랜드 소개</li>
              <li className="px-[1.2rem] border-r-[0.8px] border-[#9f9f9f]">이용약관</li>
              <li className="px-[1.2rem] border-r-[0.8px] border-[#9f9f9f]">개인정보처리방침</li>
              <li className="pl-[1.2rem]">이용안내</li>
            </ul>

            <p className="my-[1.875rem] leading-[1.4rem]">
              owner. 유승민 tel. 1111-1111
              <br />
              business no. 111-11-111111 mail order license. 1111-111-111 [사업자정보확인]
              <br />
              personal info manager. YOO SEUNGMIN (dnjfht@naver.com)
              <br />
              address. 11111 부산광역시 금정구 금단로...
            </p>
            <p>
              Copyright ⓒ 2023 All rights reserved. designed by <span className="font-bold">SEUNGMIN</span>.
            </p>
          </div>

          <div className="w-[50%] h-[100%]">
            <ul className="flex justify-between">
              <li>
                <p className="mb-[2.125rem] font-bold">CS Center</p>
                <p className="text-[1.125rem] font-bold mb-[1.25rem]">1111-1111</p>
                <p className="text-[0.875rem] leading-[1.6rem]">
                  평일 AM 10:00 - PM 05:00
                  <br />
                  점심 PM 12:00 - PM 01:00
                  <br />
                  휴무 토.일.공휴일
                </p>
              </li>
              <li>
                <p className="mb-[2.125rem] font-bold">RETURNS.DELIVERY</p>
                <p className="text-[0.875rem] leading-[1.6rem]">
                  CJ대한통운택배 (1588-1255)
                  <br />
                  부산광역시 부산진구 신암로 9,
                  <br />
                  범천빌딩 2층 CJ 대한통운 수영로직스
                </p>
              </li>
              <li>
                <p className="mb-[2.125rem] font-bold">BANK INFO</p>
                <p className="text-[0.875rem] leading-[1.6rem]">
                  국민. 000000-00-000000
                  <br />
                  농협. 000-0000-0000-00
                  <br />
                  예금주. 유승민
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
