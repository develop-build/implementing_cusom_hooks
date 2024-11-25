import { useEffect } from "react";

function useDebounceEffect(effect, dependencies, delay) {
  useEffect(() => {
      const handler = setTimeout(() => {
        effect();
      }, delay);
    
      // cleanup the timeout on dependencies change or unmount
      return () => clearTimeout(handler);
  }, [...dependencies, delay]);
}

export default useDebounceEffect;