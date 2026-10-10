import { useState, useEffect } from "react";
import type { Skill } from "../data/skills";

export const useAnimatedIcons = (skills: readonly Skill[], delay = 500) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        // -1 = 9
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1,
      );
    }, delay);

    return () => clearInterval(interval);
    // Limpia el intervalo cuando el componente se desmonta
  }, [skills.length, delay]);

  return activeIndex; // Devuelve el índice activo
};
