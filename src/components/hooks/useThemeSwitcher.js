import React, { useEffect } from "react";

export const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const usePref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
  }, []);

  return <div>useThemeSwitcher</div>;
};
