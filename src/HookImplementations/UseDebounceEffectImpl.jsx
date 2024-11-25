import React, {useState} from 'react'
import useDebounceEffect from '../customHooks/DebouncedEffectHook/useDebounceEffect';

const UseDebounceEffectImpl = () => {

  const [query, setQuery] = useState("");
  useDebounceEffect(() =>
    { console.log("API call for query: ", query); },  // effect
    [query],  // dependency
    500 // Debounce Delay
  );
  
  return (
    <input
      type='text'
      value={query}
      onChange={(e) => { setQuery(e.target.value) }}
      placeholder='Search..'
    />
  )
}

export default UseDebounceEffectImpl