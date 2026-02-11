export const LanguageButton = ({ language, handleClick }) => {
  // language ? "en" : "es"
  return (
    <button
      className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl border border-gray-800 bg-gray-950 text-[0.8rem] md:left-10 md:top-12 lg:left-30"
      onClick={handleClick}
    >
      {language}
    </button>
  );
};
