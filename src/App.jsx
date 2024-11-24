import React from 'react'
import DataFetchImpl from './HookImplementations/dataFetchImpl'
import CheckOnlineStatus from './HookImplementations/CheckOnlineStatus'

const App = () => {

  return (
    <>
      {/* <DataFetchImpl /> */}
      <CheckOnlineStatus/>
    </>
  )
}

export default App