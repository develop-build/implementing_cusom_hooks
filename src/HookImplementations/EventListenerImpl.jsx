import React, {useState} from 'react'
import useEventListener from '../customHooks/EventListenerHook/useEventListener';

const EventListenerImpl = () => {
  const [key, setKey] = useState("");
  useEventListener("keydown", (event) => setKey(event.key));

  return (
    <p>Last Key Pressed: {key}</p>
  )
}

export default EventListenerImpl