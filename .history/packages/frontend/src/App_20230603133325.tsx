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

function App(): JSX.Element {
  // const [isLoading, error, products] = useProducts();
  // console.log(products);

  return <RouterProvider router={router} />;
}

export default App;
