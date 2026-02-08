import { useContext } from "react";
import { LabLink } from "../components/LabLink";
import { LanguageContext } from "../context/LanguageContext";

import { labLinks } from "../data/labLinks";
import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

import app from "../styles/App.module.css";

export const LabsPage = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <div className="h-full space-y-4 overflow-y-auto pr-1 text-left text-sm font-light">
      <p>{newLang.content.labsContent}</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
        {labLinks.map((item, index) => (
          <div
            key={item.name}
            className="rounded-2xl border border-[#8892b026] bg-[#0a0f1a99] p-5 backdrop-blur-md transition-all duration-250 ease-in-out hover:border-[#00ffd5]"
          >
            <LabLink to={item.url} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
