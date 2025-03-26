import { useContext } from "react";
import { NavLink } from "react-router";
import { LanguageContext } from "../context/LanguageContext";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

import app from "../styles/App.module.css";
import "../styles/App.module.css";

export const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const newLang = en[language] || es[language];

  return (
    <section className={app.navbarContainer}>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? `${app.active} ${app.navbarContainerNavLink}`
            : app.navbarContainerNavLink;
        }}
        to="/"
      >
        {newLang.navbar.aboutMe}
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? `${app.active} ${app.navbarContainerNavLink}`
            : app.navbarContainerNavLink;
        }}
        to="/skills"
      >
        {newLang.navbar.skills}
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? `${app.active} ${app.navbarContainerNavLink}`
            : app.navbarContainerNavLink;
        }}
        to="/labs"
      >
        {newLang.navbar.labs}
      </NavLink>
    </section>
  );
};
