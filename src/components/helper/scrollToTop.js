import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // on window url change, page scrolls to top for when pages are big and user has scrolled far down the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
