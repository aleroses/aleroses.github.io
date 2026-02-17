import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { LabCard } from "../components/LabCard";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

export const LabsPage = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];
  const { intro, projects } = newLang.content.labsContent;

  return (
    <div className="space-y-4 pr-1 text-left text-sm font-light">
      <p>{intro}</p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <LabCard
            key={project.id}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

// grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2
