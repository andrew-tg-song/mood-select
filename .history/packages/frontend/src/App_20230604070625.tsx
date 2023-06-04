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
import ProductsList from './pages/ProductsList';
import NewProductsList from './pages/NewProductsList';
import BestProductsList from './pages/BestProductsList';
import TodayDeliveryProductsList from './pages/TodayDeliveryProductsList';
import List from './pages/List';

// import useProducts from './hooks/use-products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      {
        path: '/list/:listName',
        element: <ProductsList />,
      },
      { path: '/new', element: <NewProductsList /> },
      { path: '/best', element: <BestProductsList /> },
      { path: '/today-delivery', element: <TodayDeliveryProductsList /> },
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
