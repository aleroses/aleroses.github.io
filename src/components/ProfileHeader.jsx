import { VscVerifiedFilled } from "react-icons/vsc";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

import app from "../styles/App.module.css";
import "../styles/reactIcons.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const ProfileHeader = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <main className={app.profileHeaderMain}>
      <div className={app.profileHeaderMainDiv}>
        <h1 className="animated-gradient-text text-2xl font-bold">
          Alexander Rosas
        </h1>
        <span>
          <VscVerifiedFilled className="text-[#00ffd5]" />
        </span>
      </div>
      <div className="flex flex-col">
        <span>{newLang.header.degrees.one}</span>
        <span className="text-[0.8rem]">{newLang.header.degrees.two}</span>
      </div>
    </main>
  );
};

// text-[#00ffd5]
