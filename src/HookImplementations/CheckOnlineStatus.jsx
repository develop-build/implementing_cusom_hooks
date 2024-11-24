import React from 'react'
import useCheckOnline from '../customHooks/useOnlineHook/useCheckOnline'

const CheckOnlineStatus = () => {
  const { isOnline } = useCheckOnline();
  // console.log(isOnline);
  return (
    <div>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </div>
  )
}

export default CheckOnlineStatus