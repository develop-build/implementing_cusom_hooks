import React, { useState } from 'react'
import useExpensiveCalculation from '../customHooks/useMemoHook/useExpensiveCalculation';

const UseMemoHookImpl = () => {
  const [number, setNumber] = useState(2);
  const [factor, setFactor] = useState(3);

  const result = useExpensiveCalculation(number, factor);
  return (
    <div>
      <p>
        {number} raised to power {factor} is {result}
      </p>
      <button onClick={() => setNumber(number+1)}>Increment Number</button>
      <button onClick={() => setFactor(factor+1)}>Increment Factor</button>
    </div>
  )
}

export default UseMemoHookImpl