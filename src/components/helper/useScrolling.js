import { useState, useEffect } from "react";

// Returns current scroll and max window scroll. Dynamically changes with web page.
// Returns the second index as undefined as it is the removal of the event listener
export function useScrolling() {
  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  const [maxWindowScroll, setMaxWindowScroll] = useState(
    document.documentElement.scrollHeight - window.innerHeight
  );
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  // Changes the window scroll and max window scroll
  const handleWindowScroll = () => {
    setWindowScroll(window.scrollY);
    setMaxWindowScroll(
      document.documentElement.scrollHeight - window.innerHeight
    );
  };
  return {
    curr_scroll: windowScroll,
    max_scroll: maxWindowScroll,
    removal_of_useEvent: () => {
      window.removeEventListener("scroll", handleWindowScroll);
    }
  };
}
