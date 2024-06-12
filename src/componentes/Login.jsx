/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import Imageniot from '../assets/imagen_log_iot.png'
import Imageprofile from '../assets/ImagenUsuario.jpeg'
import './Login.css';

import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)


export const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const funcionAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){
          

            try{
                await createUserWithEmailAndPassword(auth,correo, contraseña)
            } catch(error){
                alert("Asegurece que la contraceña tenga mas de 8 caracteres")
            }

        }

        else{
            try{
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch(error){
                alert("El correo o contraseñ son incorrectas")
            }

            await signInWithEmailAndPassword(auth,correo, contraseña)
        }

    }
   

  return (
    <div className='contenedor'>
        <div className='row'>
            {/*columna mas pequeña formulario */}
            <div className='col-md-4'>
                <div className='padre'>
                    <div className="card card-body shadow-lg"  >
                        <img src ={Imageprofile} alt="" className='estilo-profile'/>
                        <form onSubmit={funcionAutenticacion}>
                            <input type="text" placeholder = 'Ingresar Email' className = 'cajatexto' id='email'/>
                            <input type="password" placeholder = 'Ingrese su contraceña' className = 'cajatexto' id ='password' />
                            <button className='botonform'>{registrando ? "Registrate": "Inicia Sesion"}</button>
                           
                        </form>
                        <h4 className='textolog'>{registrando ? "si ya tienes cuenta": "No tienes cuenta"}
                            <button className='botonswitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia Secion": "Registrate"}</button>
                        </h4>

                    </div>


                </div>


            </div>


                <div className='col-md-8'>
                    {/*columna mas grande */}
                    <img src={Imageniot} alt=""className='tamaño-imagen'></img>
                    
                    
                </div>
        </div>      
    </div>
  )
}
