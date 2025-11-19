import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollManager = (): null => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Espera al siguiente frame para asegurar que el contenido se haya renderizado
    const timeout = window.setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element instanceof HTMLElement) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};
