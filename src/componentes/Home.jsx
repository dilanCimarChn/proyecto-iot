import React from 'react'
import appFirebase from '../credenciales'  
import {getAuth,signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)
import '../organismos/Swichs.jsx'
import '../organismos/Swichs.jsx'



export const Home = ({correoUsuario}) => {
  return (
    <div>
        <h2 className ='text-center'>Bienvenido usuario {correoUsuario}<button className='botonatras' onClick={()=>signOut(auth)}>logout</button></h2>
    </div>
    
    
  )
}

export default Home