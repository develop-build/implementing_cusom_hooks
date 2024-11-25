import React from 'react';
import DataFetchImpl from './HookImplementations/dataFetchImpl';
import CheckOnlineStatusImpl from './HookImplementations/CheckOnlineStatusImpl';
import UseStateCustomImpl from './HookImplementations/UseStateCustomImpl';
import EventListenerImpl from './HookImplementations/EventListenerImpl';
import UseDebounceEffectImpl from './HookImplementations/UseDebounceEffectImpl';
import UseMemoHookImpl from './HookImplementations/useMemoHookImpl';

const App = () => {
  return (
    <>
      {/* <DataFetchImpl /> */}
      {/* <CheckOnlineStatusImpl /> */}
      {/* <UseStateCustomImpl/> */}
      {/* <EventListenerImpl /> */}
      {/* <UseDebounceEffectImpl/> */}
      <UseMemoHookImpl />
    </>
  );
};

export default App;
