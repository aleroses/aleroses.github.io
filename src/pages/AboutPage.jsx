import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

import app from "../styles/App.module.css";

export const AboutPage = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <div className={app.aboutPageContainer}>
      <p>{newLang.content.aboutMeContent.intro}</p>
      <p>{newLang.content.aboutMeContent.focus}</p>

      <p>{newLang.content.aboutMeContent.learning}</p>

      {/* 
      <p>
        Soy Administrador Industrial y, en los últimos años,
        he ampliado mis horizontes hacia el mundo de la
        Ingeniería de Software, con el objetivo de resolver
        problemas y convertir ideas en soluciones reales.
      </p>

      <p>
        Me gusta sumergirme en lo que hago, ya sea en el
        flujo de una línea de producción o en el algoritmo
        detrás de un sistema web. Para mí, cada desafío es
        una oportunidad de aprendizaje, y cada proyecto es
        una forma de demostrar cómo la dedicación y el
        conocimiento pueden cambiar vidas.
      </p>

      <p>
        Cuando no estoy desarrollando soluciones
        tecnológicas u optimizando procesos, probablemente
        estoy aprendiendo algo nuevo, explorando cómo
        mejorar continuamente y ayudando a otros a crecer.
      </p> 
      */}
    </div>
  );
};
