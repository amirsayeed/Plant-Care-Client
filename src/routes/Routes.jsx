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
          path: 'plants',
          loader: ()=> fetch('http://localhost:5000/plants'),
          hydrateFallbackElement: <Loading/>,
          Component: AllPlants
        },
        {
          path: 'plants/:id',
          loader: ({params})=> fetch(`http://localhost:5000/plants/${params.id}`),
          hydrateFallbackElement: <Loading/>,
          Component: PlantDetails
        },
        {
          path: 'myPlants',
          loader: ()=> fetch(`http://localhost:5000/plants`),
          hydrateFallbackElement: <Loading/>,
          Component: MyPlants
        },
        {
          path: 'updatePlants/:id',
          loader: ({params})=> fetch(`http://localhost:5000/plants/${params.id}`),
          hydrateFallbackElement: <Loading/>,
          Component: UpdatePlant
        }
    ]
  },
]);
