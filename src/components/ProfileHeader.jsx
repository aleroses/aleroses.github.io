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
        <h1 className={app.profileHeaderMainName}>Alexander Rosas</h1>
        <span>
          <VscVerifiedFilled className="profileHeaderVerified" />
        </span>
      </div>
      <div className={app.profileHeaderMainDegrees}>
        <span>{newLang.header.degrees.one}</span>
        <span className={app.secondDegree}>{newLang.header.degrees.two}</span>
      </div>
    </main>
  );
};
