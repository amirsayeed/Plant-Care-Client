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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'addPlant',
            element: <PrivateRoute><AddPlant/></PrivateRoute>
        },
        {
          path: 'plants',
          loader: ()=> fetch('http://localhost:5000/plants'),
          hydrateFallbackElement: <Loading/>,
          Component: AllPlants
        },
        {
          path: 'plants/:id',
          loader: ({params})=> fetch(`http://localhost:5000/plants/${params.id}`),
          hydrateFallbackElement: <Loading/>,
          element: <PrivateRoute><PlantDetails/></PrivateRoute>
        },
        {
          path: 'myPlants',
          element: <PrivateRoute><MyPlants/></PrivateRoute>
        },
        {
          path: '/updatePlants/:id',
          loader: ({params})=> fetch(`http://localhost:5000/plants/${params.id}`),
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
