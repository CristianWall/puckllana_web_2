import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  };
  


  const handleAppClick = () => {
    // Navegar a la ruta /app al hacer clic en el elemento "App"
    navigate('/');
  };

  return (
    <div className='login flex'>
      <div className='rectangulo_blur'>

        <h2 className='titulo_verde'>Registro</h2>
        <form className='formulario'>
          <input className='ingreso_texto' placeholder='Nombre' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <input className='ingreso_texto' placeholder='Correo' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input className='ingreso_texto' placeholder='Contraseña' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className='boton_login' onClick={handleRegister}>Registrarse</button>

        </form>
        <div className='login_registro'>
          <a className='link_login' onClick={handleAppClick}>Ya estas registrado ?</a>
          <button className='boton_login' onClick={handleAppClick}>Iniciar Sesion</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
