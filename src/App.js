import "./App.css";

import KappyHome from "./Components/KappyHome/KappyHome";
import Chefs from "./Components/Chefs/Chefs";
import ContactPage from "./Components/ContactPage/ContactPage";
import BugReportPage from "./Components/BugReportPage/BugReportPage";
import FeatureRequestPage from "./Components/FeatureRequestPage/FeatureRequestPage";
import RootLayout from "./SubComponents/RootLayout/RootLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
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

        {
          path: "/report-bug",
          element: <BugReportPage />,
        },

        {
          path: "/request-feature",
          element: <FeatureRequestPage />,
        },
      ],
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
