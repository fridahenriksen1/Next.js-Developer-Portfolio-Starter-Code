import React, { useEffect } from "react";

export const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const usePref = window.localStorage.getItem("theme");
  }, []);

  return <div>useThemeSwitcher</div>;
};
