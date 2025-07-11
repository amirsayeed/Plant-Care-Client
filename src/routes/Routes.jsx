import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddPlant from "../pages/AddPlant/AddPlant";
import AllPlants from "../pages/AllPlants/AllPlants";
import Loading from "../components/Loading/Loading";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import UpdatePlant from "../pages/UpdatePlant/UpdatePlant";
import MyPlants from "../pages/MyPlants/MyPlants";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            loader: ()=> fetch('https://plant-care-tracker-server-pied.vercel.app/plants'),
            hydrateFallbackElement: <Loading/>,
            Component: Home
        },
        {
          path: 'plants',
          loader: ()=> fetch('https://plant-care-tracker-server-pied.vercel.app/plants'),
          hydrateFallbackElement: <Loading/>,
          Component: AllPlants
        },
        {
          path: 'plants/:id',
          loader: ({params})=> fetch(`https://plant-care-tracker-server-pied.vercel.app/plants/${params.id}`),
          hydrateFallbackElement: <Loading/>,
          element: <PrivateRoute><PlantDetails/></PrivateRoute>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
          path: 'myPlants',
          element: <PrivateRoute><MyPlants/></PrivateRoute>
      },
      {
          path: 'addPlant',
          element: <PrivateRoute><AddPlant/></PrivateRoute>
      },
      
      {
          path: 'updatePlants/:id',
          loader: ({params})=> fetch(`https://plant-care-tracker-server-pied.vercel.app/plants/${params.id}`),
          hydrateFallbackElement: <Loading/>,
          Component: UpdatePlant
      }
    ]
  },
  {
      path: '/auth',
      Component: AuthLayout,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/auth/login',
            Component: Login
        },
        {
            path: '/auth/register',
            Component: Register
        }
      ]
  }
]);
