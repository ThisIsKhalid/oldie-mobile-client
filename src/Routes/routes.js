import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home/Home/Home';
import Signin from '../Pages/Login/Signin';
import Signup from '../Pages/Login/Signup';
import PhonesByCategory from '../Pages/Phones/PhonesByCategory/PhonesByCategory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/categories/:phones",
        element: <PhonesByCategory></PhonesByCategory>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;