import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './login.css';




const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };
  

  const handleAppClick = () => {
    // Navegar a la ruta /app al hacer clic en el elemento "App"
    navigate('/register');
  };


  return (
    <div className=' login flex'>
      <div className='rectangulo_blur'>
        <h2 className='titulo_verde'>Iniciar Sesión</h2>
        <form className='formulario'>

          <input className='ingreso_texto' placeholder='Correo Electronico' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input className='ingreso_texto' placeholder='Contraseña' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />

          <button className='boton_login' onClick={handleLogin}>Iniciar Sesión</button>

          <a className='link_login' href="">Olvidaste tu contraseña?</a>
          
          <div className='linea_login ' >.</div>


        </form>

        <div className='login_registro'>
          <a className='link_login' href="">Olvidaste tu contraseña?</a>
          <button className='boton_login' onClick={handleAppClick}>Registrarse</button>

        </div>
         
      </div>
    </div>
  );
};

export default Login;
