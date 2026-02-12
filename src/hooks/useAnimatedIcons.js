import { useState, useEffect } from "react";

export const useAnimatedIcons = (skills, delay = 500) => {
  const [activeIndex, setActiveIndex] = useState(-1);

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
