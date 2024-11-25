import { useMemo } from "react";

function useExpensiveCalculation(input, factor) {
  const result = useMemo(() => {
    // console.log('Calculating!');
    return input ** factor;
  }, [input, factor])

  return result;
}

export default useExpensiveCalculation;