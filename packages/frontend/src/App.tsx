import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import NotFoundPage from './pages/NotFoundPage';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Root from './pages/Root';
import Login from './pages/Login';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import Order from './pages/Order';
import WishList from './pages/WishList';

// import useProducts from './hooks/use-products';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: '/detail/:detailId', element: <Detail /> },
      { path: '/cart', element: <Cart /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/order', element: <Order /> },
      { path: '/wish-list', element: <WishList /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  { path: '/join', element: <Join /> },
]);

function App() {
  // const [isLoading, error, products] = useProducts();
  // console.log(products);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], () => axios('../public/data/product.json').then((res) => res.data));
  console.log(products);

  if (isLoading) return 'Loading...';
  if (error) return 'error가 발생했습니다!';
  return <RouterProvider router={router} />;
}

export default App;
