import Root from "./Roots/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Roots/errorPage";
import Home from "./Roots/Home";
import "./index.css";
import Contact from "./Roots/Contact";
import About from "./Roots/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <h1><Home /></h1>,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        element: <h1><Contact /></h1>,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <h1><About /></h1>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} >
      <Root />
      </RouterProvider>
        
    </>
  );
}

export default App;
