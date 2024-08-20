import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Root from "./rootLayout";
import FrCV from "./pages/FrCV/FrCV";
import EnCV from "./pages/EnCV/EnCV";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/cv/en",
    element: <EnCV />,
  },
  {
    path: "/cv/fr",
    element: <FrCV />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
