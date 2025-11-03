import "./App.css";

import KappyHome from "./Components/KappyHome/KappyHome";
import Chefs from "./Components/Chefs/Chefs";
import ContactPage from "./Components/ContactPage/ContactPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <KappyHome />,
      // errorElement: <Error link="/login" text="Login" />,
    },

    {
      path: "/chefs",
      element: <Chefs />,
      // errorElement: <Error link="/login" text="Login" />,
    },

    {
      path: "/contactPage",
      element: <ContactPage />,
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
