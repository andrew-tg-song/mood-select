import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import QuickMenu from '../components/QuickMenu';
import Suggestion from '../components/Suggestion';

export default function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Suggestion />
      <QuickMenu />
      <Footer />
    </div>
  );
}
