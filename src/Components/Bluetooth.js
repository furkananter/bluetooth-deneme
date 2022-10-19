import React from 'react'
const request = () => {
    navigator.bluetooth.requestDevice({acceptAllDevices: true}).then(data => console.log(data))
    
}
const Bluetooth = () => {
  return (
    <div>
        <button onClick={request}> 
            Request
        </button>
    </div>
  )
}

export default Bluetooth