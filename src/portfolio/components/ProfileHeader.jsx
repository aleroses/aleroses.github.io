import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import { VscVerifiedFilled } from "react-icons/vsc";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

// import "../styles/reactIcons.css";

export const ProfileHeader = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];
  const { degrees } = newLang.header;

  return (
    <main className="mt-4">
      <div className="flex items-center justify-center gap-2">
        <h1 className="animated-gradient-text text-2xl font-bold sm:text-3xl md:text-4xl">
          Alexander Rosas
        </h1>
        <span>
          <VscVerifiedFilled className="text-[#00ffd5] sm:text-3xl" />
        </span>
      </div>

      <div className="flex flex-col">
        {degrees.map((item, index) => (
          <span
            key={item}
            className="last:text-[0.8rem] sm:text-[1.4rem] sm:last:text-[1rem] md:text-[1.6rem] md:last:text-[1.2rem]"
          >
            {item}
          </span>
        ))}
      </div>
    </main>
  );
};

// text-[#00ffd5]
