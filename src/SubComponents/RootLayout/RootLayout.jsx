import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Pages with a hash handle their own scroll-to-section.
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return <Outlet />;
};

export default RootLayout;
