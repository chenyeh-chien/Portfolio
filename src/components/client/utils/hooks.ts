"use client"

import { useEffect, useState } from "react";

export function useOverflowHidden(element?: HTMLElement | null) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = element || document.body;

    if (hidden) {
      target.classList.add("overflow-hidden");
    } else {
      target.classList.remove("overflow-hidden");
    }

    function handleWindowResize(event: UIEvent) {
      event.preventDefault();

      if (hidden) {
        setHidden(false);
      }
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      target.classList.remove("overflow-hidden");
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [element, hidden]);

  return [hidden, setHidden] as const;
}
