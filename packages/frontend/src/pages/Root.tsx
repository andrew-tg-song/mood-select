import { useRef } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import QuickMenu from '../components/QuickMenu';
import Suggestion from '../components/Suggestion';
import Category from '../components/Category';
import { useRecoilState } from 'recoil';
import { categoryAppearState } from '../atoms/app-atoms';

export default function Root() {
  const contentRef = useRef<HTMLDivElement>(null);

  const [categoryAppear] = useRecoilState(categoryAppearState);

  return (
    <div ref={contentRef}>
      {categoryAppear ? <Category /> : <></>}
      <NavBar />
      <Outlet />
      <Suggestion />
      <QuickMenu contentRef={contentRef} />
      <Footer />
    </div>
  );
}
