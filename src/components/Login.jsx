import React, { useState } from 'react'

import Imagen from '../assets/login.jpg' 
import ImageProfile from '../assets/profile.jpg'

import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasenia = e.target.password.value;
        if(registrando){
            try {
                await createUserWithEmailAndPassword(auth,correo,contrasenia)
            } catch (error) {
                alert("La contraseña debe tener 8 o más caracteres")
            }
            

        }
        else{
            try {
                await signInWithEmailAndPassword(auth,correo,contrasenia)
            } catch (error) {
                alert("El usuario o la contraseña son incorrectos")
            }
            
        }
    }


    return(
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProfile} alt="" className='estilo-profile' />
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email'/>
                                <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password'/>
                                <button className='btnform'>{registrando ? "Registrate" : "Inicia sesión" }</button>
                            </form>
                            <h4 className='texto'>{registrando ? "Si ya tienes cuenta:" : "Si no tienes cuenta:"}<button className='btnswitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-8">
                    <img src={Imagen} alt="" className='tamanio-imagen'/>
                </div>

            </div>
        </div>

    )
}

export default Login