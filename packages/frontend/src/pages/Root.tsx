import { useRef } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import QuickMenu from '../components/QuickMenu';
import Suggestion from '../components/Suggestion';

export default function Root() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={contentRef}>
      <NavBar />
      <Outlet />
      <Suggestion />
      <QuickMenu contentRef={contentRef} />
      <Footer />
    </div>
  );
}
