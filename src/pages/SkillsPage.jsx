import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";
import { useAnimatedIcons } from "../hooks/useAnimatedIcons";

import { skills } from "../data/skills";
import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

import app from "../styles/App.module.css";
import "../styles/reactIcons.css";

export const SkillsPage = () => {
  const { language } = useContext(LanguageContext);
  const newLang = en[language] || es[language];

  // Usamos el hook
  const activeIndex = useAnimatedIcons(skills, 1000);

  return (
    <section className="h-full space-y-4 overflow-y-auto text-sm font-light">
      <p>{newLang.content.skillsContent}</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2 rounded-xl p-2">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <div className="flex justify-center" key={skill.name}>
              <IconComponent
                className="skillsPageIcons gradient-icon transition-all duration-300"
                style={{
                  color:
                    activeIndex === index
                      ? skill.color
                      : "var(--first-text-color)",
                  // boxShadow:
                  //   activeIndex === index
                  //     ? "0 1px 5px #cad5e2"
                  //     : "none",
                  filter:
                    activeIndex === index
                      ? "drop-shadow(0 1px 5px #cad5e2)"
                      : "none",

                  transition: "color 0.3s ease-in-out",
                }}
              />
              {/* <span>{skill.name}</span> */}
            </div>
          );
        })}
      </div>

      {/* <p>
        Mi especialidad es el Desarrollo Web y el ecosistema
        de tecnologías que lo rodea. A continuación, un
        resumen de mis habilidades:
      </p> */}
    </section>
  );
};
