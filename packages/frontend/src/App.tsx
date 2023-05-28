import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import NotFoundPage from './pages/NotFoundPage';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Main /> },
      { path: '/detail/:detailId', element: <Detail /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
