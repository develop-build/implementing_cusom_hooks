import React from 'react'
import useCustomState from '../customHooks/useStateHook/useCustomState'

const UseStateCustomImpl = () => {

  const [count, setCount] = useCustomState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default UseStateCustomImpl