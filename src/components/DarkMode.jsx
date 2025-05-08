import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import "../styles/DarkMode.css";

export const DarkMode = () => {
  const setDarkMode = () => {
    document
      .querySelector("body")
      .setAttribute("data-theme", "dark");

    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document
      .querySelector("body")
      .setAttribute("data-theme", "light");

    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem(
    "selectedTheme"
  );

  if (selectedTheme === "dark") setDarkMode();

  const toggleTheme = () => {
    const theme = document
      .querySelector("body")
      .getAttribute("data-theme");
    // console.log(theme);
    const logo = document.querySelector(".logo");

    // e.target.checked ? setDarkMode() : setLightMode();
    theme === "light" ? setDarkMode() : setLightMode();
    theme === "light"
      ? (logo.src = `${moon}`)
      : (logo.src = `${sun}`);
  };

  // const changeMode = () => {
  //   const btn = document.querySelector(".dark_mode");
  //   const logo = document.querySelector(".logo");

  //   btn.classList.toggle("dark-mode");

  //   btn.classList.contains("dark-mode")
  //     ? (logo.src = `${moon}`)
  //     : (logo.src = `${sun}`);
  // };

  return (
    // <div className="dark_mode">
    //   <input
    //     className="dark_mode_input"
    //     type="checkbox"
    //     id="darkmode-toggle"
    //     onChange={toggleTheme}
    //     defaultChecked={selectedTheme === "dark"}
    //   />
    //   <label
    //     className="dark_mode_label"
    //     htmlFor="darkmode-toggle"
    //   >
    //     <img className="sun" src={sun} alt="" />
    //     <img className="moon" src={moon} alt="" />
    //   </label>
    // </div>

    <button
      className="dark_mode"
      onClick={toggleTheme}
      // onChange={toggleTheme}
    >
      <img className="logo" src={sun} alt="Logo Luna" />
    </button>
  );
};
