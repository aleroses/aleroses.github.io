import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Experience } from "../components/Experience";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

export const AboutPage = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <div className="h-full space-y-4 overflow-y-auto pr-1 text-left text-sm font-light">
      {newLang.content.aboutMeContent.intro.map((item, index) => (
        <p key={item}>{item}</p>
      ))}

      <h3 className="text-[1rem] font-bold">
        {newLang.content.aboutMeContent.experience.title}
      </h3>
      <Experience newLang={newLang} />
    </div>
  );
};

/* 
Mi experiencia como Administrador Industrial:

- Asistente de Materia Prima, Editora El Comercio S.A – Lima, Perú Dic 2017 – Jun 2019
 • Controlé y analicé el consumo de materia prima, identificando mermas y elaborando reportes mensuales para garantizar la trazabilidad del proceso productivo.

- Encargado de Bodega, REPLAU S.A.C – Lima, Perú Ag 2016 – Sept 2017
 • Gestioné y controlé el flujo del almacén, asegurando el orden, trazabilidad y abastecimiento oportuno de materiales para producción.

 - Supervisor de SST, COINREFRI S.R.L – Piura, Perú Dic 2014 – Jul 2016
 • Supervisé y promoví la seguridad y salud en el trabajo mediante inspecciones, capacitaciones y acciones de prevención y control de riesgos, fomentando un entorno laboral seguro y ordenado.

*/

/* 
Industrial Management Experience

- Raw Materials Assistant

  Editora El Comercio S.A. — Lima, Peru
  Dec 2017 – Jun 2019

  • Monitored and analyzed raw material consumption, identifying waste and preparing monthly reports to ensure traceability throughout the production process.

- Warehouse Supervisor

  REPLAU S.A.C. — Lima, Peru
  Aug 2016 – Sep 2017

  • Managed and controlled warehouse operations, ensuring order, traceability, and timely supply of materials for production.

- Occupational Health & Safety Supervisor (OHS)

  COINREFRI S.R.L. — Piura, Peru
  Dec 2014 – Jul 2016

  • Supervised and promoted occupational health and safety through inspections, training sessions, and risk prevention and control measures, fostering a safe and organized work environment.











> This industrial background shaped my analytical mindset, process-oriented thinking,  
> and attention to detail — skills I now apply in software development and frontend engineering.

*/

/* 
- Desarrollador Web, Freelance – Quito, Ecuador En 2023 – presente
 • Diseño e implementación de interfaces web modernas y responsivas, aplicando principios de accesibilidad y experiencia de usuario.
 • +6 proyectos publicados
*/
