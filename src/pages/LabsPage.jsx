import { useContext } from "react";
import { LabLink } from "../components/LabLink";
import { LanguageContext } from "../context/LanguageContext";

import en from "/public/translations/en.json";
import es from "/public/translations/es.json";

import app from "../styles/App.module.css";

export const LabsPage = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <div className={app.labsContainer}>
      <p>{newLang.content.labsContent}</p>

      <div className={app.linksContainer}>
        <LabLink
          to="https://alevroses.github.io/api__movies/"
          name="Look Movie"
        />
        <LabLink
          to="https://aleroses.github.io/memorygame-v2/"
          name="Memorigame"
        />
        <LabLink
          to="https://aleroses.github.io/fode-italian-food/"
          name="Italian Food"
        />
        <LabLink
          to="https://aleroses.github.io/async-landing/"
          name="Landing Page"
        />
        <LabLink
          to="https://aleroses.github.io/js__countdown/"
          name="Countdown"
        />
        <LabLink
          to="https://aleroses.github.io/videogame/"
          name="Explosive Game"
        />
        <LabLink
          to="https://aleroses.github.io/Blog.github.io/"
          name="Blog X"
        />
        <LabLink
          to="https://github.com/aleroses/Platzi/tree/master/DW"
          name="Notes"
        />
      </div>
      {/* <p>
    En esta sección, encontrarás una selección de
    proyectos en los que he trabajado a lo largo de
    varios meses. Cada uno representa un desafío único y
    una oportunidad para aplicar y expandir mis
    habilidades. Estoy constantemente explorando nuevas
    ideas, así que no dudes en volver pronto para
    descubrir más.
  </p> */}
    </div>
  );
};
