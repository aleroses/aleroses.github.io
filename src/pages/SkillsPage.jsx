import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";
import { useAnimatedIcons } from "../hooks/useAnimatedIcons";

import { skills } from "../data/skills";
import en from "/public/translations/en.json";
import es from "/public/translations/es.json";

import app from "../styles/App.module.css";
import "../styles/reactIcons.css";

export const SkillsPage = () => {
  const { language } = useContext(LanguageContext);
  const newLang = en[language] || es[language];

  // Usamos el hook
  const activeIndex = useAnimatedIcons(skills, 1000);

  return (
    <section className={app.skillsPageContainer}>
      <p>{newLang.content.skillsContent}</p>

      <div className={app.skillsPageIconsContainer}>
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <div
              className={app.containerIcon}
              key={skill.name}
            >
              <IconComponent
                className="skillsPageIcons gradient-icon"
                style={{
                  color:
                    activeIndex === index
                      ? skill.color
                      : "#1d293d",
                  boxShadow:
                    activeIndex === index
                      ? "0 1px 5px #cad5e2"
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
