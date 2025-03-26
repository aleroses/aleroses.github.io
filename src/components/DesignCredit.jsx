import { useContext } from "react";
import app from "../styles/App.module.css";
import { LanguageContext } from "../context/LanguageContext";
import en from "/public/translations/en.json";
import es from "/public/translations/es.json";

export const DesignCredit = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <footer className={app.footer}>
      <p>
        {`${newLang?.general?.credits} `}
        <a
          href="https://x.com/janm_uiux"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jan Mraz
        </a>
      </p>
    </footer>
  );
};
