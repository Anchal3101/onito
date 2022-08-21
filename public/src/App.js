import React from 'react'
import io from 'socket.io-client'
import Socket,{MyTwo} from './socket/Socket'




function App() {
   
  const socket=io.connect("http://localhost:4000")
  

  socket.on('user_data',(data)=>{
            console.log(data)
  })
  socket.emit('user_emit',"its from frontend")


  return (
    <>
        <Socket></Socket>
        <MyTwo></MyTwo>
    </>
  )
}

export default App