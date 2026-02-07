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
        {newLang.header.degrees.map((item, index) => (
          <span key={item} className="last:text-[0.8rem]">
            {item}
          </span>
        ))}
      </div>
    </main>
  );
};

// text-[#00ffd5]
