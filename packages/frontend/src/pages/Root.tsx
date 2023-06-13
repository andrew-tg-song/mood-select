import { useRef, useContext } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import QuickMenu from '../components/QuickMenu';
import Suggestion from '../components/Suggestion';
import { CategoryToggleContext } from '../context/CategoryToggleContext';
import Category from '../components/Category';

export default function Root() {
  const contentRef = useRef<HTMLDivElement>(null);

  const { categoryAppear } = useContext(CategoryToggleContext);

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
