import { useContext } from "react";
import { NavLink } from "react-router";
import { LanguageContext } from "../context/LanguageContext";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

const NAV_ITEMS = [
  { to: "/", key: "aboutMe" },
  { to: "/skills", key: "skills" },
  { to: "/labs", key: "labs" },
];

export const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const newLang = en[language] || es[language];
  const t = (en[language] || es[language]).navbar;

  return (
    <nav className="order-3 my-4 flex w-full justify-between sm:justify-around md:order-2 md:flex-col md:items-center">
      {NAV_ITEMS.map(({ to, key }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `relative px-2 py-1 text-sm font-medium transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#00ffd5] after:transition-transform after:duration-300 hover:after:scale-x-100 md:flex md:w-36 md:justify-center md:text-[1rem] ${
              isActive
                ? "after:scale-x-100"
                : "text-white/20 hover:text-white hover:drop-shadow-[0_0_6px_#ff4d4d]"
            } `
          }
        >
          {t[key]}
        </NavLink>
      ))}
    </nav>
  );
};

// max-w-sm
//  ? "border border-[#00ffd5] shadow-[0_4px_15px_rgba(0,255,213,0.6)]"
// hover:bg-white/10
// backdrop-blur-md
