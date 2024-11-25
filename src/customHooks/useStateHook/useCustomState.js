import { useReducer } from 'react';


/*
 *   Code Simplification: Reduces repetitive logic in components.
 *   Improved Maintainability: Encapsulates behavior for consistency across the app.  
 */


function useCustomState(initialValue) {
  const stateReducer = (state, newValue) => newValue;

  // Using useReducer to handle state changes
  const [state, setState] = useReducer(stateReducer, initialValue);
  return [state, setState];
}

export default useCustomState;