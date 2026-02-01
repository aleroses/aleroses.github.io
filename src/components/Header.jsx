import { ProfilePicture } from "./ProfilePicture";
import { Statistics } from "./Statistics";
import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

import app from "../styles/App.module.css";

export const Header = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <header className="flex justify-center">
      {/* <Statistics
        completed={`110101`}
        category={newLang.header.statistics.courses}
      /> */}
      <ProfilePicture />
      {/* <Statistics
        completed={`000111`}
        category={newLang.header.statistics.projects}
      /> */}

      {/* 53 - 4 */}
    </header>
  );
};
