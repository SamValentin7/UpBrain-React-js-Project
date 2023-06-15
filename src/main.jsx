import { createRoot } from 'react-dom/client'
import App from './App'
import About from './pages/about/About'
import Login from './login/Login'
import Contact from './pages/contact/Contact'
import Games from './pages/games/Games'
import Payment from './pages/payment/Payment'
import Registration from './components/Login/Registration'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/login",
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
  
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
