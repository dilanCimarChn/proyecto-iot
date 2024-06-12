/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

//importando firebase
import appFirebase from '../src/credenciales';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(appFirebase);

//importando login

import { Login } from '../src/componentes/Login'
import { Home } from '../src/componentes/Home'



import './App.css'; // Ruta correcta para el archivo CSS

function App() {

  const[usuario, setUsuario]  = useState (null)

  onAuthStateChanged (auth, (usuarioFirebase)=>{
    if (usuarioFirebase)
      {
        setUsuario (usuarioFirebase)
      }
      else
      {
        setUsuario(null)
      }
  })


  return (
    <div >
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
     
    </div>
  );
}

export default App
