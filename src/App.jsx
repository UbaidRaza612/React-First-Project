import { Children } from "react";
import "./App.css";
import Root from "./Roots/root";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ErrorPage from "./Roots/errorPage";
import Contact from "./Roots/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      Children: [
        {
          path: "contact",
          element: <h1>Contact</h1>,
          errorElement: <ErrorPage />,
        },
        {
          path: "about",
          element: <h1>About</h1>,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} >
      <Root />
      </RouterProvider>
        
    </>
  );
}

export default App;
