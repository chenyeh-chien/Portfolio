import { useEffect, useState } from "react";

export function useOverflowHidden(element: HTMLElement): 
  [boolean, (offset: boolean) => void] {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (hidden) {
      element.classList.add("overflow-hidden");
    } else {
      element.classList.remove("overflow-hidden");
    }
  
    function handleWindowResize(event: UIEvent) {
      event.preventDefault();
    
      if (hidden) {
        setHidden(false);
      }
    }
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      element.classList.remove("overflow-hidden");
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [element, hidden, setHidden]);

  return [hidden, setHidden]
}