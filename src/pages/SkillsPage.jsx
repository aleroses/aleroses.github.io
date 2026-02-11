import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";
import { useAnimatedIcons } from "../hooks/useAnimatedIcons";

import { skills } from "../data/skills";
import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

// import "../styles/reactIcons.css";

export const SkillsPage = () => {
  const { language } = useContext(LanguageContext);
  const newLang = en[language] || es[language];

  // Usamos el hook
  const activeIndex = useAnimatedIcons(skills, 1000);

  return (
    <section className="space-y-4 pr-1 text-left text-sm font-light">
      <p>{newLang.content.skillsContent}</p>

      <div className="flex flex-wrap justify-center gap-3 rounded-xl p-2">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <div
              className="flex w-fit items-center justify-center gap-2 rounded-full border border-[#8892b026] bg-[#0a0f1a99] px-3.5 py-2 backdrop-blur-md"
              key={skill.name}
            >
              <IconComponent
                className="h-6 w-6 transition-all duration-300"
                style={{
                  color: activeIndex === index ? skill.color : "#cad5e2",
                  filter:
                    activeIndex === index
                      ? "drop-shadow(0 1px 14px #cad5e2)"
                      : "none",
                  // boxShadow:
                  //   activeIndex === index ? "0 1px 5px #cad5e2" : "none",

                  transition: "color 0.3s ease-in-out, filter 0.3s ease-in-out",
                }}
              />
              <span className="text-xs">{skill.name}</span>
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

// Celeste: #00ffd5
// #9ca3af
