import React, { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NetflixLoader from "./components/NetflixLoader";

const Home = lazy(() => import("./pages/Home/Home"));
const Detalies = lazy(() => import("./pages/Detalies/Detalies"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "move/:id",
      element: <Detalies />,
    },
  ]);
  return (
    <div>
      <Suspense fallback=<NetflixLoader />>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
