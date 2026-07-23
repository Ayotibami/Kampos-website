import "./App.css";

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import KappyHome from "./Components/KappyHome/KappyHome";
import RootLayout from "./SubComponents/RootLayout/RootLayout";
import PageLoader from "./SubComponents/PageLoader/PageLoader";

/* The landing page stays in the main bundle — it is the most common entry, so
   splitting it would only add a round trip before anything renders.

   Every other route is code-split: a visitor reading the homepage no longer
   downloads the legal pages, the forms and the chefs page just to see it. Each
   chunk is fetched on navigation and cached from then on. */
const Chefs = lazy(() => import("./Components/Chefs/Chefs"));
const ContactPage = lazy(() => import("./Components/ContactPage/ContactPage"));
const BugReportPage = lazy(
  () => import("./Components/BugReportPage/BugReportPage"),
);
const FeatureRequestPage = lazy(
  () => import("./Components/FeatureRequestPage/FeatureRequestPage"),
);
const PrivacyPolicy = lazy(
  () => import("./Components/PrivacyPolicy/PrivacyPolicy"),
);
const TermsConditions = lazy(
  () => import("./Components/TermsConditions/TermsConditions"),
);
const CommunityGuidelines = lazy(
  () => import("./Components/CommunityGuidelines/CommunityGuidelines"),
);

/* Wraps a split route so its chunk can stream in without blanking the app. */
const split = (Page) => (
  <Suspense fallback={<PageLoader />}>
    <Page />
  </Suspense>
);

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <KappyHome />,
        },

        {
          path: "/chefs",
          element: split(Chefs),
        },

        {
          path: "/contactPage",
          element: split(ContactPage),
        },

        {
          path: "/report-bug",
          element: split(BugReportPage),
        },

        {
          path: "/request-feature",
          element: split(FeatureRequestPage),
        },

        {
          path: "/privacy",
          element: split(PrivacyPolicy),
        },

        {
          path: "/terms",
          element: split(TermsConditions),
        },

        {
          path: "/community-guidelines",
          element: split(CommunityGuidelines),
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
