import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

// import "../styles/DarkMode.css";

export const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("selectedTheme") || "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // const Icon = theme === "dark" ? FiMoon : FiSun;
  // const altText =
  // theme === "dark" ? "Moon logo" : "Sun logo";

  return (
    <button className="mode-btn" data-theme={theme} onClick={toggleTheme}>
      <FiMoon className="logo moon-icon" />
      <FiSun className="logo sun-icon" />
    </button>
  );
};
