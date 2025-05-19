import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddPlant from "../pages/AddPlant/AddPlant";

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
        }
    ]
  },
]);
