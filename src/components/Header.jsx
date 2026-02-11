import { useContext } from "react";
import { ProfilePicture } from "./ProfilePicture";

import { LanguageContext } from "../context/LanguageContext";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

export const Header = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <header className="flex justify-center">
      <ProfilePicture />
    </header>
  );
};
