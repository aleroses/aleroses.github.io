import app from "../styles/App.module.css";

export const LanguageButton = ({
  language,
  handleClick,
}) => {
  // language ? "en" : "es"
  return (
    <button
      className={app.languageButton}
      onClick={handleClick}
    >
      {language}
    </button>
  );
};
