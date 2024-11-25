import React from 'react'
import useCheckOnline from '../customHooks/useOnlineHook/useCheckOnline'

const CheckOnlineStatusImpl = () => {
  const { isOnline } = useCheckOnline();
  return (
    <div>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </div>
  )
}

export default CheckOnlineStatusImpl