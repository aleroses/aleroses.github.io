import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";
import { useAnimatedIcons } from "../hooks/useAnimatedIcons";

import { skills } from "../data/skills";
import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

export const SkillsPage = () => {
  const { language } = useContext(LanguageContext);
  const newLang = en[language] || es[language];
  const { intro, categories, closure } = newLang.content.skillsContent;

  // Usamos el hook
  const activeIndex = useAnimatedIcons(skills, 1000);

  return (
    <section className="space-y-4 pr-1 text-left text-sm font-light">
      <p>{intro}</p>

      {/* Categorized Skills */}
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title} className="space-y-2">
            <h3 className="text-base font-medium text-[#00ffd5]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3 space-y-1 text-[#cad5e2]">
              {category.items.map((item, index) => {
                const skill = skills.find((skill) => skill.name === item);

                const skillIndex = skills.findIndex(
                  (skillItem) => skillItem.name === item,
                );

                const IconComponent = skill?.icon;

                return (
                  <div
                    key={item}
                    className="flex w-fit items-center justify-center gap-2 rounded-full border border-[#8892b026] bg-[#0a0f1a99] px-3.5 py-2 backdrop-blur-md group hover:shadow-[0_0_12px_var(--color)]"
                  >
                    {IconComponent && (
                      <IconComponent
                        className="h-6.5 w-6.5 transition-all duration-500 ease-in-out group-hover:scale-110"
                        style={{
                          color:
                            activeIndex === skillIndex
                              ? skill.color
                              : "#cad5e2",
                          filter:
                            activeIndex === skillIndex
                              ? `drop-shadow(0 1px 14px ${skill.color})`
                              : "none",
                          // transform:
                          //   activeIndex === skillIndex
                          //     ? "scale(1.15)"
                          //     : "scale(1)",
                          transition:
                            "color 0.3s ease-in-out, filter 0.3s ease-in-out",
                        }}
                      />
                    )}
                    <span className="">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p>{closure}</p>
    </section>
  );
};

// Celeste: #00ffd5
// #9ca3af
