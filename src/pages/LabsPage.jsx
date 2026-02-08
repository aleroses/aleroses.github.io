import { useContext } from "react";
import { LabLink } from "../components/LabLink";
import { LanguageContext } from "../context/LanguageContext";

import { labLinks } from "../data/labLinks";
import en from "/src/translations/en.json";
import es from "/src/translations/es.json";

// import app from "../styles/App.module.css";

export const LabsPage = () => {
  const { language } = useContext(LanguageContext);

  const newLang = en[language] || es[language];

  return (
    <div className="h-full space-y-4 overflow-y-auto pr-1 text-left text-sm font-light">
      <p>{newLang.content.labsContent}</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
        {labLinks.map((item, index) => (
          <LabLink
            url={item.url}
            name={item.name}
            className="rounded-2xl border border-[#8892b026] bg-[#0a0f1a99] p-5 backdrop-blur-md transition-all duration-250 ease-in-out hover:border-[#00ffd5]"
          />
        ))}
      </div>
    </div>
  );
};

/* 
Look Movie
Web en la que se puede ver gran variedad de películas y principalmente construida teniendo en cuenta un diseño responsivo. ¡Estoy muy orgulloso de este trabajo!

Memorygame
Juego de memoria que muestra u oculta cartas a medida que emparejas correctamente los pares de la carta mostrada inicialmente.

Chef Food
Web pensada para un restaurante, con variedad de platillos, bebidas y postres. La UI es muy moderna y atractiva para un público más actual.

Landing Page


Countdown




Explosive Game
Este fue el primer videojuego que hice con JS, en el que tienes que evitar las bombas y seguir por una ruta determinada para continuar al siguiente nivel.

Blog X

Mario Game

Notes

*/
