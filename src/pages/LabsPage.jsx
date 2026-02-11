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

/* 
Look Movie
Web para explorar una gran variedad de películas, desarrollada con un fuerte enfoque en diseño responsivo. ¡Estoy muy orgulloso de este trabajo!

Memory Game
Juego de memoria en el que debes encontrar los pares correctos mientras las cartas se muestran y ocultan dinámicamente.

Chef Food
Sitio web para un restaurante, con menú de platillos, bebidas y postres. Destaca por una UI moderna y atractiva, pensada para un público actual.

Landing Page
Landing para conocer y descubrir los últimos videos de Fazt Code, uno de los desarrolladores que más sigo y de quien he aprendido mucho.

Countdown
Cuenta regresiva que muestra cuántos días y horas faltan para el Año Nuevo. Un proyecto simple pero ideal para los amantes de las festividades :)

Explosive Game
Mi primer videojuego desarrollado con JavaScript. El objetivo es esquivar bombas y seguir una ruta para avanzar de nivel.

Blog X
Plataforma para compartir novedades a modo de bitácora digital personal. El proyecto puede ser clonado y usado libremente para publicar contenido.

Mario Game
Versión alternativa al clásico Tic Tac Toe. Con funcionalidades para jugar contra el sistema en distintos niveles de dificultad. ¡En desarrollo!

Notes
Mis apuntes personales sobre lo que he aprendido a lo largo de mi camino como Desarrollador Frontend. Ideal para repasar y compartir conocimiento.

*/

/* 
Look Movie
A web app to explore a wide variety of movies, developed with a strong focus on responsive design. I’m really proud of this project!

Memory Game
A memory game where you must find matching pairs as cards are dynamically revealed and hidden.

Chef Food
A restaurant website featuring a menu of dishes, drinks, and desserts. It stands out for its modern and visually appealing UI, designed for today’s audience.

Landing Page
A landing page to discover the latest videos from Fazt Code, one of the developers I follow the most and from whom I’ve learned a lot.

Countdown
A countdown that shows how many days and hours are left until the New Year. A simple but fun project for those who love celebrations :)

Explosive Game
My first video game developed with JavaScript. The goal is to avoid bombs and follow a specific path to advance to the next level.

Blog X
A platform for sharing updates as a personal digital journal. The project can be cloned and freely used to start publishing content.

Mario Game
An alternative version of the classic Tic Tac Toe, featuring gameplay against the system with different difficulty levels. Currently in development!

Notes
My personal notes covering everything I’ve learned throughout my journey as a Frontend Developer. Great for reviewing and sharing knowledge.

*/
