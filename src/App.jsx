import React from 'react'
import DataFetchImpl from './HookImplementations/dataFetchImpl'
import CheckOnlineStatusImpl from './HookImplementations/CheckOnlineStatusImpl'
import UseStateCustomImpl from './HookImplementations/UseStateCustomImpl'
import EventListenerImpl from './HookImplementations/EventListenerImpl'

const App = () => {

  return (
    <>
      {/* <DataFetchImpl /> */}
      {/* <CheckOnlineStatusImpl /> */}
      {/* <UseStateCustomImpl/> */}
      <EventListenerImpl/>
    </>
  )
}

export default App