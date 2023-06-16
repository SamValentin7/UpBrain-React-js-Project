import { createRoot } from 'react-dom/client'
import App from './App'
import About from './pages/about/About'
import Login from './components/Login/Login'
import Contact from './pages/contact/Contact'
import Games from './pages/games/Games'
import Payment from './pages/payment/Payment'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "paypal",
    element: <Payment />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
