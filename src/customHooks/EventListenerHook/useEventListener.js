import { useEffect } from "react";
  
function useEventListener(eventName, handler, element=window) {
  useEffect(() => {
    
    // Ensure the element supports addEventListener
    if (!element.addEventListener) return;

    // Add the addEventListener
    element.addEventListener(eventName, handler);

    // Cleanup the event listener on unmount
    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, element])
}

export default useEventListener;