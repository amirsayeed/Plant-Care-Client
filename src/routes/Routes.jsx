import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddPlant from "../pages/AddPlant/AddPlant";
import AllPlants from "../pages/AllPlants/AllPlants";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'addPlant',
            Component: AddPlant
        },
        {
          path: 'allPlants',
          loader: ()=> fetch('http://localhost:5000/plants'),
          hydrateFallbackElement: <Loading/>,
          Component: AllPlants
        }
    ]
  },
]);
