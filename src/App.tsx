import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CV_NicolasTorre_en_v1 from "./data/CV_NicolasTorre_en_v1.json";
import CV_NicolasTorre_fr_v1 from "./data/CV_NicolasTorre_fr_v1.json";
import CV from "./components/CV/CV";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Root from "./rootLayout";

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
    element: <CV data={CV_NicolasTorre_en_v1} />,
  },
  {
    path: "/cv/fr",
    element: <CV data={CV_NicolasTorre_fr_v1} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
